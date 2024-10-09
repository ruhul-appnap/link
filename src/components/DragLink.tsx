"use client";

import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import Preview from "./Preview";
import AddLinkForm from "./AddLinkForm";
import { DragEndEvent } from "@dnd-kit/core";

type Link = {
  id: string;
  platform: string;
  url: string;
};

export default function Component() {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", platform: "GitHub", url: "https://www.github.com/benwright" },
    { id: "2", platform: "YouTube", url: "https://www.youtube.com/benwright" },
  ]);

  const addLink = () => {
    const newLink: Link = {
      id: Date.now().toString(),
      platform: "GitHub",
      url: "",
    };
    setLinks([newLink, ...links]);
  };

  const updateLink = (id: string, field: keyof Link, value: string) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, [field]: value } : link))
    );
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setLinks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <main className="container mx-auto">
      <div className="h-full flex lg:justify-between flex-col-reverse lg:flex-row ">
        <section className="bg-white w-full lg:w-[40%] flex items-center justify-center rounded-lg p-2 lg:h-[calc(100vh-150px)]  ">
          <Preview links={links} />
        </section>

        <section className="bg-white w-full lg:w-[57%] flex items-center justify-center rounded-lg p-2">
          <AddLinkForm
            links={links}
            handleDragEnd={handleDragEnd}
            addLink={addLink}
            removeLink={removeLink}
            updateLink={updateLink}
          />
        </section>
      </div>
    </main>
  );
}

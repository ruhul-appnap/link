"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import SortableLink from "./SortableLink";

type Link = {
  id: string;
  platform: string;
  url: string;
};

type AddLinkForm = {
  handleDragEnd: (e: DragEndEvent) => void;
  addLink: () => void;
  updateLink: (id: string, field: keyof Link, value: string) => void;
  removeLink: (id: string) => void;
  links: Link[];
};

function AddLinkForm({
  handleDragEnd,
  addLink,
  updateLink,
  removeLink,
  links,
}: AddLinkForm) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="w-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Customize your links</h1>
        <p className="text-gray-600 mb-6">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <Button
          onClick={addLink}
          variant="outline"
          className="w-full mb-6 text-primary border-primary hover:bg-primary/10 flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add new link
        </Button>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={links} strategy={verticalListSortingStrategy}>
            {links.map((link, index) => (
              <SortableLink
                key={link.id}
                link={link}
                index={index}
                updateLink={updateLink}
                removeLink={removeLink}
              />
            ))}
          </SortableContext>
        </DndContext>

        <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
          Save
        </Button>
      </div>
    </div>
  );
}

export default AddLinkForm;

import Preview from "@/components/Preview";
import ProfileForm from "@/components/ProfileForm";
import React from "react";

function page() {
  const links = [
    { id: "1", platform: "GitHub", url: "https://www.github.com/benwright" },
    { id: "2", platform: "YouTube", url: "https://www.youtube.com/benwright" },
    {
      id: "3",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/benwright",
    },
  ];

  return (
    <main className="lg:h-[calc(100vh-150px)] container mx-auto">
      <div className="h-full flex lg:justify-between flex-col-reverse lg:flex-row ">
        <section className="bg-white w-full lg:w-[40%] flex items-center justify-center rounded-lg p-2 ">
          <Preview links={links} />
        </section>

        <section className="bg-white w-full lg:w-[57%] flex items-center justify-center rounded-lg p-2">
          <ProfileForm />
        </section>
      </div>
    </main>
  );
}

export default page;

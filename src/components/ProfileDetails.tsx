"use client";

import { useState } from "react";

import Preview from "./Preview";

type ProfileDetails = {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

import ProfileForm from "./ProfileForm";

export default function ProfileDetails() {
  const [links] = useState([
    { id: "1", platform: "GitHub", url: "https://www.github.com/benwright" },
    { id: "2", platform: "YouTube", url: "https://www.youtube.com/benwright" },
    {
      id: "3",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/benwright",
    },
  ]);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setProfileDetails((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileDetails((prev) => ({
  //         ...prev,
  //         profilePicture: reader.result as string,
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSave = () => {
  //   // Here you would typically send the profileDetails to your backend
  //   console.log("Saving profile details:", profileDetails);
  //   setSuccessMessage("Your changes have been successfully saved!");
  //   setTimeout(() => setSuccessMessage(""), 3000);
  // };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-8">
        <div className="w-1/3">
          <div className="w-full  bg-white flex items-center justify-center  rounded-md">
            <Preview links={links} />
          </div>
        </div>
        <div className="w-2/3 bg-white">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

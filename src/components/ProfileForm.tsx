"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ProfileForm() {
  const [firstName, setFirstName] = useState("Ben");
  const [lastName, setLastName] = useState("Wright");
  const [email, setEmail] = useState("ben@example.com");

  return (
    <div className="w-full p-2 lg:p-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Details</h1>
      <p className="text-gray-600 mb-6">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="mb-6 bg-[#fafafa] p-6 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="w-1/4 font-medium text-gray-700">
            Profile picture
          </span>
          <div className="relative w-32 h-32 rounded-lg overflow-hidden group ">
            <Image
              src="/placeholder.svg"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="bg-gray-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Change Image</span>
              </div>
            </div>
          </div>

          <p className="ml-1/4 pl-2 text-xs text-gray-500">
            Image must be below 1024x1024px.
            <br />
            Use PNG, JPG, or BMP format.
          </p>
        </div>
      </div>

      <div className="space-y-4 bg-[#fafafa] p-6 rounded-lg">
        <div className="flex items-center">
          <label
            htmlFor="firstName"
            className="w-1/4  font-medium text-gray-700"
          >
            First name*
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="lastName"
            className="w-1/4  font-medium text-gray-700"
          >
            Last name*
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-1/4  font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <hr className=" my-10" />

      <div className="flex justify-end">
        <Button className="bg-purple-500 ">Save</Button>
      </div>
    </div>
  );
}

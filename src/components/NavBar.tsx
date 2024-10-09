"use client";

import { useState } from "react";
import { Link2, User2, Eye } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("links");

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg mb-8">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
        <span className="text-xl font-bold text-gray-800">devlinks</span>
      </div>

      <div className="hidden md:flex space-x-2">
        <NavItem
          icon={<Link2 className="w-5 h-5" />}
          label="Links"
          isActive={activeTab === "links"}
          href="/"
        />
        <NavItem
          icon={<User2 className="w-5 h-5" />}
          label="Profile Details"
          isActive={activeTab === "profile"}
          href="/profile-details"
        />
      </div>

      <div className="flex md:hidden space-x-4">
        <NavIcon
          icon={<Link2 className="w-6 h-6" />}
          isActive={activeTab === "links"}
          onClick={() => setActiveTab("links")}
        />
        <NavIcon
          icon={<User2 className="w-6 h-6" />}
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
        <NavIcon
          icon={<Eye className="w-6 h-6" />}
          isActive={activeTab === "preview"}
          onClick={() => setActiveTab("profile")}
        />
      </div>

      <button className="hidden md:block px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
        Preview
      </button>
    </nav>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
};

function NavItem({ icon, label, isActive, href }: NavItemProps) {
  return (
    <Link
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors  relative${
        isActive
          ? "bg-purple-100 text-purple-600"
          : "text-gray-500 hover:text-purple-600"
      }`}
      href={href}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

type NavIconProps = {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

function NavIcon({ icon, isActive, onClick }: NavIconProps) {
  return (
    <button
      className={`p-2 rounded-lg transition-colors ${
        isActive ? "text-purple-600" : "text-gray-500 hover:text-purple-600"
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

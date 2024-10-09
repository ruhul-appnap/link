import { Github, Youtube, Linkedin } from "lucide-react";
import React from "react";

export const platformIcons: { [key: string]: React.ComponentType } = {
  GitHub: Github,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export const platformColors: { [key: string]: string } = {
  GitHub: "bg-black",
  YouTube: "bg-red-600",
  LinkedIn: "bg-blue-600",
};

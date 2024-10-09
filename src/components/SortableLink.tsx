"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link as LinkIcon, GripVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Link = {
  id: string;
  platform: string;
  url: string;
};

type SortableLinkProps = {
  link: Link;
  index: number;
  updateLink: (id: string, field: keyof Link, value: string) => void;
  removeLink: (id: string) => void;
};

function SortableLink({
  link,
  index,
  updateLink,
  removeLink,
}: SortableLinkProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="mb-6 p-4 bg-gray-100 rounded-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div {...listeners} className="cursor-move">
            <GripVertical className="w-5 h-5 text-gray-400 mr-2" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">
            Link #{index + 1}
          </h2>
        </div>
        <Button
          onClick={() => removeLink(link.id)}
          variant="ghost"
          className="text-gray-500 hover:text-gray-700"
        >
          Remove
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label
            htmlFor={`platform-${link.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Platform
          </Label>
          <Select
            onValueChange={(value) => updateLink(link.id, "platform", value)}
            defaultValue={link.platform}
          >
            <SelectTrigger id={`platform-${link.id}`} className="w-full mt-1">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GitHub">GitHub</SelectItem>
              <SelectItem value="YouTube">YouTube</SelectItem>
              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label
            htmlFor={`link-${link.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Link
          </Label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <Input
              id={`link-${link.id}`}
              className="pl-10"
              placeholder={`https://www.${link.platform.toLowerCase()}.com/yourusername`}
              value={link.url}
              onChange={(e) => updateLink(link.id, "url", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortableLink;

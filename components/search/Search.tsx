"use client";

import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const commands = [
  { value: "calendar", label: "Calendar" },
  { value: "search-emoji", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
  { value: "calendar", label: "Calendar" },
  { value: "search-emoji", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
  { value: "calendar", label: "Calendar" },
  { value: "search-emoji", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
];

const MovieSearch = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (value: string) => {
    
    setInputValue(value);
    setOpen(!!value);
  };

  return (
    <div className="relative">
      <Command className="rounded-t-lg border border-black shadow-md bg-black text-white">
        <CommandInput
          placeholder="Search movie or show..."
          onValueChange={handleValueChange}
          className="lg:w-[300px]"
        />

        <CommandList className="rounded-b-lg absolute top-[46px] lg:w-[348px] z-10 bg-black hidden"></CommandList>
      </Command>
    </div>
  );
};

export default MovieSearch;

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

  const filteredCommands = Array.isArray(commands)
    ? commands.filter((command) =>
        command.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];
  
  return (
    <div className="relative">
      <Command className="rounded-t-lg border shadow-md">
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={handleValueChange}
        />
        {
          <CommandList className="rounded-b-lg absolute top-[46px] w-[244px] z-10 bg-white">
            {open &&
              filteredCommands.length > 0 &&
              filteredCommands.map((command) => (
                <CommandItem key={command.value} value={command.value}>
                  {command.label}
                </CommandItem>
              ))}
          </CommandList>
        }
      </Command>
    </div>
  );
};

export default MovieSearch;

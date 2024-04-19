
"use client"

import { useRouter } from 'next/navigation';

import {
  Command,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

const MovieSearch = () => {
  const router = useRouter()

  const handleValueChange = (value: string) => {
    if (value) {
      router.push(`/search/${value}`)
    } else {
      router.push(`/`)
    }
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

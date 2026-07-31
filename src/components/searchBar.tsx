
"use client";

import { Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center py-8 gap-1">
      <div className="relative flex items-center w-full bg-white border border-slate-200 rounded-xl shadow-sm focus-within:ring-4 focus-within:ring-[#ad8d7d] focus-within:border-[#4E342E] transition-all overflow-hidden">
        <div className="pl-5 text-slate-400">
          <Search className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="Search for courses (e.g. Next.js, Web Design...)"
          className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
        />
      </div>

      <button
        onClick={handleSearch}
        className="cursor-pointer h-10 px-6 mr-2 rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E] font-semibold transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;


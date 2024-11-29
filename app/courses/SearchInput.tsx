"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";

export default function SearchInput({ text }: { text: string | undefined }) {
  const [query, setQuery] = useState(text || "");
  const router = useRouter();
  async function searchCourses(formData: FormData) {
    router.push(`/courses?query=${formData.get("query")}`);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };
  return (
    <div className="flex flex-row justify-center items-center h-3/4 gap-3 border-black border px-3 rounded-full">
      <Form action={searchCourses} className="flex space-x-2">
        <Search className="h-6 w-6 transform text-muted-foreground" />
        <Input
          name="query"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="pl-8 pr-10 h-4/5 border-none shadow-none"
        />
        {query && (
          <>
            <Button type="submit" size={"sm"}>
              Submit
            </Button>
            <Button
              onClick={handleClear}
              variant={"ghost"}
              size="sm"
              className="transform h-5/6 rounded-full hover:bg-slate-400 "
            >
              <X className="" />
              <span className="sr-only">Clear search</span>
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

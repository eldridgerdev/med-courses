"use client";
import testData from "@/testData/medbridge-courses.json";
import CourseCard from "./CourseCard";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// @TODO: Move to own file so only this has to use client
const SearchInput = ({ text }: { text: string }) => {
  const [query, setQuery] = useState(text || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };
  return (
    <div className="flex flex-row justify-center items-center h-3/4 gap-3 border-black border px-3 rounded-full">
      <Search className="h-6 w-6 transform text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="pl-8 pr-10 h-4/5 border-none shadow-none"
      />
      {query && (
        <Button
          onClick={handleClear}
          variant={"ghost"}
          size="sm"
          className="transform h-5/6 rounded-full hover:bg-slate-400 "
        >
          <X className="" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
};
export default function CoursePage() {
  // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  // <main className="flex flex-col row-start-2 items-center sm:items-start rounded-[0.5rem] border bg-background shadow w-full">
  // className={`w-full items-start justify-center gap-10 p-8 flex flex-wrap flex-row flex-basis-0 grow-0 bg-bgp`}
  return (
    <>
      <main className={`flex flex-col bg-bgp w-full items-center flex-grow`}>
        <div className="h-16 w-1/2 flex items-center">
          <div className="w-full h-3/4 gap-10 bg-white rounded-full flex items-center justify-center  shadow-black shadow-sm ">
            <SearchInput text="" />
            <div className="h-full flex flex-row justify-center items-center">
              <span className="">FILTER</span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "h-[calc(100vh-4rem-4rem-5px)]",
            `items-start justify-center gap-10 px-8 pt-10 flex flex-wrap flex-row grow-0 overflow-y-auto w-full`,
          )}
        >
          {/*<div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">*/}
          {testData.content.map((data) => (
            <CourseCard key={data.title} data={data} />
          ))}
        </div>
      </main>
    </>
  );
}

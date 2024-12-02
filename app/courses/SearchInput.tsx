"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchInput({ text }: { text: string | undefined }) {
  const [query, setQuery] = useState(text || "");
  const [inputFocus, setInputFocus] = useState(false);
  const router = useRouter();
  function searchCourses() {
    router.push(`/courses${query && `?query=${query}`}`);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
    router.push(`/courses`);
  };

  return (
    <motion.div
      layout
      transition={{
        duration: 0.1,
      }}
      className={cn(
        "h-3/4 border-black border px-3 rounded-full",
        inputFocus && "ring-blue-700 ring-2 border-none",
      )}
    >
      <Form
        action={searchCourses}
        className="w-full h-full flex flex-row justify-center items-center gap-3"
      >
        <Search className="h-6 w-6 transform text-muted-foreground" />
        <Input
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          name="query"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="pl-8 pr-10 h-4/5 border-none shadow-none focus:!ring-0"
        />
        <AnimatePresence>
          {query && (
            <motion.div>
              <Button type="submit" size={"sm"} className="rounded-full">
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
            </motion.div>
          )}
        </AnimatePresence>
      </Form>
    </motion.div>
  );
}

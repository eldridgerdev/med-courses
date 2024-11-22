"use client";
import testData from "@/testData/medbridge-courses.json";
import CourseCard from "./courses/CourseCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start rounded-[0.5rem] border bg-background shadow w-full">
          <div
            className={`w-full items-start justify-center gap-10 rounded-lg p-8 flex flex-wrap flex-row flex-basis-0 grow-0 bg-bgp`}
          >
            {/*<div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">*/}
            {testData.content.map((data) => (
              <CourseCard key={data.title} data={data} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

import { cn } from "@/lib/utils";
import SearchInput from "./SearchInput";
import CourseCardList from "./CourseCardList";
import { getCourses } from "@/server/queries";
import testCategories from "@/testData/medbridge-course-categories.json";
import realTestCategories from "@/testData/medbridge-api-course-categories.json";

type SearchParams = Promise<{ [key: string]: string | undefined }>;
export default async function CoursePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const courses = await getCourses();
  const query = (await searchParams).query;
  const filteredCourses = !query
    ? courses
    : courses.filter((course) => {
        // @TODO: better searching
        const categories = testCategories.data.find(
          (cat) => cat.id === course.id,
        )?.categories;
        return categories?.some(
          (category) => category.toLowerCase() === query.toLowerCase(),
        );
      });
  // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  // <main className="flex flex-col row-start-2 items-center sm:items-start rounded-[0.5rem] border bg-background shadow w-full">
  // className={`w-full items-start justify-center gap-10 p-8 flex flex-wrap flex-row flex-basis-0 grow-0 bg-bgp`}
  return (
    <>
      <main className={`flex flex-col bg-bgp w-full items-center flex-grow`}>
        <div className="h-16 w-3/5 flex items-center">
          <div className="w-full h-3/4 gap-10 bg-white rounded-full flex items-center justify-center  shadow-black shadow-sm ">
            <SearchInput text={(await searchParams).query || ""} />
            <div className="h-full flex flex-row justify-center items-center">
              <span className=""></span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "h-[calc(100vh-4rem-4rem-5px)]",
            `items-center justify-center gap-10 px-8 pt-10 flex flex-wrap flex-row grow-0 overflow-y-auto w-full`,
          )}
        >
          {/*<div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">*/}
          <CourseCardList courses={filteredCourses} />
        </div>
      </main>
    </>
  );
}

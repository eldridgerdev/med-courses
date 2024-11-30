"use client";
import testData from "@/testData/medbridge-courses.json";
import testCategories from "@/testData/medbridge-course-categories.json";
import CourseCard from "./CourseCard";
import { AnimatePresence, motion } from "framer-motion";
type Query = string | undefined;
// @TODO: Better type management from testdata once it's real
// @TODO:Better searching

export default function CourseCardList({ query }: { query: Query }) {
  const filteredCourses = !query
    ? testData.content
    : testData.content.filter((course) => {
        const categories = testCategories.data.find(
          (cat) => cat.id === course.id,
        )?.categories;
        return categories?.some(
          (category) => category.toLowerCase() === query.toLowerCase(),
        );
      });

  return (
    <AnimatePresence>
      {filteredCourses.length === 0 && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          NO COURSES FOUND
        </motion.h2>
      )}
      {filteredCourses.length > 0 &&
        filteredCourses.map((data: (typeof testData.content)[0]) => (
          <motion.div
            layout
            transition={{
              duration: 0.5,
            }}
            key={data.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CourseCard data={data} />
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

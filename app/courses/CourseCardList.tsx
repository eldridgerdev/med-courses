"use client";
import CourseCard from "./CourseCard";
import { AnimatePresence, motion } from "framer-motion";
import { Course } from "./types";

export default function CourseCardList({ courses }: { courses: Course[] }) {
  return (
    <AnimatePresence>
      {courses.length === 0 && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          NO COURSES FOUND
        </motion.h2>
      )}
      {courses.length > 0 &&
        courses.map((data) => (
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

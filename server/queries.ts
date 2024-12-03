import "server-only";
import { db } from "./db";
import { courses } from "./db/schema";

type NewCourse = typeof courses.$inferInsert;

export async function getCourses() {
  const courses = await db.query.courses.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return courses;
}

export async function addCourses(newCourses: NewCourse[]) {
  if (!newCourses || newCourses.length === 0) {
    return;
  }
  await db.insert(courses).values(newCourses);
}

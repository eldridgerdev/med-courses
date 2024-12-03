import "server-only";
import { db } from "./db";

export async function getCourses() {
  const courses = await db.query.courses.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return courses;
}

import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { sql } from "@vercel/postgres";

import testData from "@/testData/medbridge-courses.json";

export const db = drizzle(sql, { schema });

async function buildCourseExample() {
  const db = drizzle(sql, { schema });
  return Promise.all(
    testData.content.map(async (course) => {
      const c: typeof schema.courses.$inferInsert = {
        id: course.id,
        title: course.title,
        brief_description: course.brief_description,
        hero_image: course.hero_image,
        instructors: [
          ...course.instructors.map((inst) => inst.name_without_ending),
        ],
      };

      await db.insert(schema.courses).values(c);

      console.log("New Course Created");
      return c;
    }),
  );
}
async function main() {
  buildCourseExample();
}

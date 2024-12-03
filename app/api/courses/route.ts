import { getCourses } from "@/server/queries";

export async function GET(request: Request) {
  const courses = await getCourses();
  return Response.json(courses);
}

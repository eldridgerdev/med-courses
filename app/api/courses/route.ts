import { addCourses, getCourses } from "@/server/queries";

export async function GET(request: Request) {
  const courses = await getCourses();
  return Response.json(courses);
}

export async function POST(request: Request) {
  console.log(request);
  const data = await request.json();
  await addCourses(data);
}

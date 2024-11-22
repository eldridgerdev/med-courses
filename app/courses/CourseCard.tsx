import { HTMLAttributes } from "react";
import testData from "@/testData/medbridge-courses.json";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// @TODO: Update data type once I have a universal implementation
interface CourseCardProps extends HTMLAttributes<HTMLDivElement> {
  data: (typeof testData.content)[number];
}
export default function CourseCard({ data, className }: CourseCardProps) {
  return (
    <motion.section whileHover={{ scale: 1.1 }}>
      <Card className={cn("w-[400px] overflow-hidden", className)}>
        <Image
          className=""
          width={400}
          height={200}
          src={data.hero_image}
          alt="picture for the course"
        />
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription className="hidden">desc</CardDescription>
        </CardHeader>
        <Separator className="mb-3" />
        <CardContent className="hidden">
          <div dangerouslySetInnerHTML={{ __html: data.brief_description }} />
        </CardContent>
        <CardFooter className="flex flex-col">
          <span>Taught By:</span>
          {data.instructors.map((ins, i) => (
            <div key={i} className="flex">
              <p>{ins.name_without_ending}</p>
            </div>
          ))}
        </CardFooter>
      </Card>
    </motion.section>
  );
}

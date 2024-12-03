"use client";
import { HTMLAttributes } from "react";
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
import { Course } from "./types";

interface CourseCardProps extends HTMLAttributes<HTMLDivElement> {
  data: Course;
}
export default function CourseCard({ data, className }: CourseCardProps) {
  return (
    <motion.section whileHover={{ scale: 1.1, rotate: "1deg" }}>
      <Card className={cn("w-[400px] overflow-hidden", className)}>
        <Image
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
          {data.instructors &&
            data.instructors.map((ins, i) => (
              <div key={i} className="flex">
                <p>{ins}</p>
              </div>
            ))}
        </CardFooter>
      </Card>
    </motion.section>
  );
}

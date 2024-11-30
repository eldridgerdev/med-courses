import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import CoursesSidebar from "./CourseSideBar";
import { cn } from "@/lib/utils";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className={cn("min-h-[calc(100vh-4rem)]")}>
      {/*
      <CoursesSidebar />
      */}
      {children}
    </SidebarProvider>
  );
}

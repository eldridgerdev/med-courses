import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import CoursesSidebar from "./CourseSideBar";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <CoursesSidebar />
      {children}
    </SidebarProvider>
  );
}

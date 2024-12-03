import { integer, pgTableCreator, varchar } from "drizzle-orm/pg-core";

export const pgTable = pgTableCreator((name) => `medcourse_${name}`);
export const courses = pgTable("courses", {
  id: integer().primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  brief_description: varchar("brief_description").notNull(),
  hero_image: varchar("hero_image", { length: 256 }).notNull(),
  instructors: varchar("instructors", { length: 256 }).notNull().array(),
});
export const categories = pgTable("categories", {
  id: integer().primaryKey(),
  categories: varchar("instructors", { length: 256 }).notNull().array(),
});

import { z } from "zod";

export const bioSchema = z
  .string()
  .max(1200, "Bio must be at most 1200 characters long")
  .refine(
    val => {
      const spaceCount = (val.match(/\n/g) || []).length;
      return spaceCount <= 6;
    },
    {
      message: "Bio cannot contain more than 5 new lines.",
    }
  );
export const headingSchema = z
  .string()
  .min(1, "Heading is required")
  .max(30, "Heading must be at most 30 characters long");
export const subheadingSchema = z.string().max(30, "Subheading must be at most 30 characters long");
export const urlSchema = z.string().max(400, "URL must be at most 400 characters long")

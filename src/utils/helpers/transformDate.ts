import { z } from "zod";

const dateSchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
});

export type TDate = z.infer<typeof dateSchema>;

export const getMonthNameByNumber = (month: TDate["month"]): string => {
  if (!month || month > 12 || month < 1) return "";
  return Intl.DateTimeFormat("en", { month: "short" }).format(
    new Date(month.toString()),
  );
};

export const getFullDate = (date: TDate): string => {
  const validationResult = dateSchema.safeParse(date);
  if (!validationResult.success) return "";
  return `${date.day} ${getMonthNameByNumber(date.month)}, ${date.year}`;
};

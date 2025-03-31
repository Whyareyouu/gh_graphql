import { BadgeProps } from "@/components/ui/badge";
import { MediaListStatus, MediaStatus } from "@/graphql";

export const capitalizeFirstLetter = (text: string): string => {
  if (!text || typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const pluralize = (count: number, singular: string, plural?: string): string => {
  if (count === 1) return `${count} ${singular}`;

  if (plural) return `${count} ${plural}`;

  if (singular.endsWith("y") && !/[aeiou]y$/i.test(singular)) {
    return `${count} ${singular.slice(0, -1)}ies`;
  }
  if (/(s|sh|ch|x|z)$/i.test(singular)) {
    return `${count} ${singular}es`;
  }
  if (singular.endsWith("f")) {
    return `${count} ${singular.slice(0, -1)}ves`;
  }
  if (singular.endsWith("fe")) {
    return `${count} ${singular.slice(0, -2)}ves`;
  }
  if (/o$/i.test(singular) && !/[aeiou]o$/i.test(singular)) {
    return `${count} ${singular}es`;
  }

  return `${count} ${singular}s`;
};

export const statusDistributionColors: { [key in MediaListStatus]: BadgeProps["colors"] } = {
  [MediaListStatus.Current]: "violetAccent",
  [MediaListStatus.Planning]: "cyanAccent",
  [MediaListStatus.Completed]: "lightGreenAccent",
  [MediaListStatus.Dropped]: "pinkAccent",
  [MediaListStatus.Paused]: "salmonAccent",
  [MediaListStatus.Repeating]: "magentaAccent",
};

export const statusColors: Record<MediaStatus, BadgeProps["colors"]> = {
  [MediaStatus.Finished]: "greenAccent",
  [MediaStatus.Releasing]: "blueAccent",
  [MediaStatus.NotYetReleased]: "yellowAccent",
  [MediaStatus.Cancelled]: "redAccent",
  [MediaStatus.Hiatus]: "purpleAccent",
};

import { BadgeProps } from "@/components/ui/badge";
import { MediaListStatus, MediaStatus } from "@/graphql";

export const capitalizeFirstLetter = (text: string): string => {
  if (!text || typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
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

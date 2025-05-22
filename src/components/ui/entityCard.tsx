"use client";
import Link from "next/link";
import Image from "next/image";
import { HoverCardWrapper } from "./hover-card";
import { capitalizeFirstLetter, pluralize } from "@/utils";
import { Badge } from "./badge";
import type { MediaType, MediaFormat, MediaTitle, MediaCoverImage, FuzzyDate } from "@/graphql";

const ANIME_TYPE = "ANIME" as const;
const MANGA_TYPE = "MANGA" as const;

type Media = {
  id: number;
  title?: MediaTitle | null;
  coverImage?: MediaCoverImage | null;
  seasonYear?: number | null;
  format?: MediaFormat | null;
  season?: string | null;
  averageScore?: number | null;
  episodes?: number | null;
  chapters?: number | null;
  genres?: (string | null)[] | null;
  studios?: {
    nodes?: {
      name: string;
    }[] | null;
  } | null;
  type?: MediaType | null;
  startDate?: FuzzyDate | null;
};

interface EntityCardProps {
  media: Media;
  withHover?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    image: { width: 100, height: 150 },
    container: "max-w-[100px]",
  },
  md: {
    image: { width: 186, height: 265 },
    container: "max-w-48",
  },
  lg: {
    image: { width: 300, height: 425 },
    container: "max-w-[300px]",
  },
};

export const EntityCard = ({ media, withHover = true, size = "md" }: EntityCardProps) => {
  const {
    title,
    coverImage,
    seasonYear,
    format,
    season,
    averageScore,
    episodes,
    chapters,
    genres,
    studios,
    id,
    type,
    startDate,
  } = media;

  const config = sizeConfig[size];
  const displayTitle = title?.english || title?.romaji || "";
  const coverImageUrl = coverImage?.large || "";
  const mediaType = type || ANIME_TYPE;

  const hoverCardContent = (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span>
          {mediaType === ANIME_TYPE
            ? `${capitalizeFirstLetter(season || "")} ${seasonYear}`
            : `Publishing Since ${startDate?.year}`}
        </span>
        <span>{averageScore}%</span>
      </div>
      <div className="flex flex-col">
        <span>{studios?.nodes?.[0]?.name}</span>
        <div className="flex">
          {format && capitalizeFirstLetter(format)}
          {mediaType === ANIME_TYPE && episodes && ` • ${pluralize(episodes, "episode")}`}
          {mediaType === MANGA_TYPE && chapters && ` • ${pluralize(chapters, "chapter")}`}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {genres?.map((genre: string | null) => genre && <Badge key={genre}>{genre}</Badge>)}
      </div>
    </div>
  );

  const renderHoverCard = (content: React.ReactNode) => {
    if (withHover) {
      return (
        <HoverCardWrapper content={hoverCardContent} side="right" sideOffset={10}>
          {content}
        </HoverCardWrapper>
      );
    }
    return content;
  };

  return (
    <div className={config.container}>
      {renderHoverCard(
        <Link
          href={`/${mediaType.toLowerCase()}/${id}/${displayTitle.toLowerCase().replaceAll(" ", "-")}`}
          className="flex flex-col gap-2 justify-between"
        >
          <Image
            src={coverImageUrl}
            alt={displayTitle}
            width={config.image.width}
            height={config.image.height}
            className={`w-[${config.image.width}px] h-[${config.image.height}px]`}
          />
          <h2 className="line-clamp-2">{displayTitle}</h2>
        </Link>,
      )}
    </div>
  );
};


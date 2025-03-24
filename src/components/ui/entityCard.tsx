"use client";
import Link from "next/link";
import Image from "next/image";
import { HoverCardWrapper } from "./hover-card";
import { capitalizeFirstLetter, pluralize } from "@/utils";
import { Badge } from "./badge";

// TODO: Порефачить карточку, поправить типы и всю портянку

interface AnimeCardProps {
  title: string;
  coverImage: string;
  seasonYear: number;
  format: string;
  id: number;
  season: string;
  meanScore: number;
  studio: {
    nodes: {
      name: string;
    }[];
  };
  genres: string[];
  episodes: number;
  avarageScore: number;
  type: "MANGA" | "ANIME";
  startDate?: string;
}

export const EntityCard = (props: AnimeCardProps) => {
  const { title, coverImage, seasonYear, format, season, avarageScore, episodes, genres, studio, id, type, startDate } =
    props;

  const hoverCardContent = (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span>
          {type === "ANIME" ? `${capitalizeFirstLetter(season)} ${seasonYear}` : `Publishing Since ${startDate}`}
        </span>
        <span>{avarageScore}%</span>
      </div>
      <div className="flex flex-col">
        <span>{studio?.nodes?.[0]?.name}</span>
        <div className="flex">
          {capitalizeFirstLetter(format)}
          {episodes && ` • ${pluralize(episodes, "episode")}`}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">{genres?.map((genre) => <Badge key={genre}>{genre}</Badge>)}</div>
    </div>
  );

  return (
    <div className="max-w-48">
      <HoverCardWrapper content={hoverCardContent} side="right" sideOffset={10}>
        <Link
          href={`/${type.toLowerCase()}/${id}/${title.toLowerCase().replaceAll(" ", "-")}`}
          className="flex flex-col gap-2"
        >
          <Image src={coverImage} alt={title} width={186} height={265} />
          <h2>{title}</h2>
        </Link>
      </HoverCardWrapper>
    </div>
  );
};

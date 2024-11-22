"use client";
import Link from "next/link";
import Image from "next/image";

interface AnimeCardProps {
  title: string;
  coverImage: string;
  seasonYear: number;
  format: string;
  id: number;
}

export const AnimeCard = ({
  title,
  coverImage,
  seasonYear,
  format,
  id,
}: AnimeCardProps) => {
  return (
    <div className="flex flex-col gap-1 w-[185px]">
      <Image src={coverImage} alt={title} width={185} height={265} />
      <div className="flex flex-col gap-1">
        <h2>{title}</h2>
        <div className="flex justify-between">
          <Link href={""}>{format}</Link>
          <span>{seasonYear}</span>
        </div>
      </div>
    </div>
  );
};

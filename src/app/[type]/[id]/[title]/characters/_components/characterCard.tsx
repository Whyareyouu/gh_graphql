"use client";
import Link from "next/link";
import Image from "next/image";

interface CharacterCardProps {
  id: number;
  name: {
    full: string;
    native: string;
  };
  image: {
    large: string;
    medium: string;
  };
  age?: string;
}

export const CharacterCard = ({ id, name, image, age }: CharacterCardProps) => {
  return (
    <Link
      href={`/character/${id}/${name.full.toLowerCase().replaceAll(" ", "-")}`}
      className="flex w-full max-w-md items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors border border-border"
    >
      <Image
        src={image.medium}
        alt={name.full}
        width={80}
        height={100}
        className="w-[80px] h-[100px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <h3 className="text-base font-semibold leading-5">{name.full}</h3>
        <span className="text-sm text-muted-foreground">Age: {age || "unknown"}</span>
      </div>
    </Link>
  );
};

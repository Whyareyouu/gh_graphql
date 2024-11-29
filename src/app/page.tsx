"use client";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useGetAnimeListQuery } from "@/graphql";
import { AnimeCard } from "@/components/ui/animeCard";

export default function Home() {
  const { data, loading } = useGetAnimeListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.Page?.media?.map((anime) => (
        <AnimeCard
          title={anime?.title?.english || anime?.title?.romaji}
          coverImage={anime?.coverImage?.large}
          seasonYear={anime?.seasonYear}
          format={anime?.format}
          key={anime?.id}
        />
      ))}
    </div>
  );
}

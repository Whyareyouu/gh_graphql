"use client";
import { EntityCard } from "@/components/ui/entityCard";
import { GET_ANIME_LIST } from "@/graphql";
import { useSuspenseQuery } from "@apollo/client";
import type { GetAnimeListQuery } from "@/graphql/requests/__generated__";
import { format } from "path";

export default function Home() {
  const { data } = useSuspenseQuery<GetAnimeListQuery>(GET_ANIME_LIST, {variables: {
    type: "ANIME",
    sort: "POPULARITY_DESC",
    format: "TV",
  }});

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {data?.Page?.media?.filter((anime): anime is NonNullable<typeof anime> => anime !== null).map((anime) => (
        <EntityCard
          key={anime.id}
          media={{
            ...anime,
            studios: anime.studios ? {
              nodes: anime.studios.nodes?.filter((node): node is NonNullable<typeof node> => node !== null)
            } : null
          }}
          size="md"
        />
      ))}
    </div>
  );
}

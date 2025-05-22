import { HtmlContent } from "@/components/ui/htmlContent";
import { Status } from "@/components/ui/status";
import { GET_ANIME_BY_ID, GetAnimeByIdQuery } from "@/graphql";
import { TDate } from "@/utils/helpers";
import Image from "next/image";
import { getClient } from "@/utils/helpers/client";
import { PageTabs } from "./_components/pageNavigation";
import React from "react";

const Layout = async ({
  params,
  children,
}: {
  params: { id: string; title: string; type: string };
  children: React.ReactNode;
}) => {
  const { id, type, title } = await params;

  const { data } = await getClient().query<GetAnimeByIdQuery>({
    query: GET_ANIME_BY_ID,
    variables: { mediaId: Number(id) },
  });

  const media = data?.Media;
  return (
    <div>
      <div className="flex justify-between gap-8">
        <div>
          <Image
            src={media?.coverImage?.large || "/images/notfound.png"}
            alt={media?.title?.native || "Banner"}
            width={225}
            height={320}
          />
        </div>
        <div className="flex-1">
          {media?.description ? <HtmlContent htmlString={media?.description} /> : "No description available"}
        </div>
        <div className="flex flex-col gap-1 max-w-sm w-full">
          <div>Romaji: {media?.title?.romaji} </div>
          <div>English: {media?.title?.english}</div>
          <div>Native: {media?.title?.native}</div>
          <div>Genres: {media?.genres}</div>
          <div>Episode&nbsp;duration: {media?.duration}</div>
          <div>
            Status:
            <Status status={media?.status} date={{startDate: (media?.startDate as TDate), endDate: (media?.endDate as TDate)}}  />
          </div>
          <div>Episodes: {media?.episodes}</div>
          <div>Format: {media?.format}</div>
          <div>Season: {media?.season}</div>
          <div>
            Studios:
            {media?.studios?.edges?.find((edge) => edge?.isMain)?.node?.name}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <PageTabs type={type} id={id} title={title} />
        {children}
      </div>
    </div>
  );
};
export default Layout;

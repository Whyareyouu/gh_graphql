"use client";

import { HtmlContent } from "@/components/ui/htmlContent";
import { Status } from "@/components/ui/status";
import { useGetAnimeByIdQuery } from "@/graphql";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "./loading";
import { StatusDistribution } from "@/components/ui/statusDistribution";

const TestPage = () => {
  const { id } = useParams();

  const { data, loading } = useGetAnimeByIdQuery({
    variables: { mediaId: Number(id) },
  });

  if (loading) {
    return <Loading />;
  }

  const media = data?.Page?.media?.[0];
  console.log(media);
  return (
    <div>
      <div className="flex justify-between gap-8">
        <div className="">
          <Image src={media?.coverImage?.large} alt={media?.title?.native} width={225} height={320} />
        </div>
        <div className="flex-1">
          <HtmlContent htmlString={media?.description} />
        </div>
        <div className="flex flex-col gap-1 max-w-sm w-full">
          <div>Romaji: {media?.title?.romaji} </div>
          <div>English: {media?.title?.english}</div>
          <div>Native: {media?.title?.native}</div>
          <div>Genres: {media?.genres}</div>
          <div>Episode&nbsp;Duration: {media?.duration}</div>
          <div>
            Status:
            <Status status={media?.status} date={{ startDate: media?.startDate, endDate: media?.endDate }} />
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
      <StatusDistribution statusDistribution={media?.stats?.statusDistribution} />
    </div>
  );
};
export default TestPage;

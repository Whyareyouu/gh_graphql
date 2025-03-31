import { EntityCard } from "@/components/ui/entityCard";
import { GET_RALATIONS_BY_ID, useGetRelationsByIdQuery } from "@/graphql";
import { getClient } from "@/utils/helpers/client";

const Relations = async ({ params }: { params: { id: string; title: string } }) => {
  const { id } = await params;
  console.log("id", id);
  const { data, loading } = await getClient().query({
    query: GET_RALATIONS_BY_ID,
    variables: { mediaId: Number(id), isMain: true },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { relations } = data?.Media || {};

  return (
    <div className="flex flex-wrap gap-5 items-start">
      {relations?.nodes?.map((node: any) => (
        <EntityCard
          {...node}
          title={node?.title?.english || node?.title?.romaji}
          coverImage={node?.coverImage?.large}
          seasonYear={node?.seasonYear}
          format={node?.format}
          key={node?.id}
          avarageScore={node?.averageScore}
          id={node?.id}
          startDate={node?.startDate?.year}
        />
      ))}
    </div>
  );
};

export default Relations;

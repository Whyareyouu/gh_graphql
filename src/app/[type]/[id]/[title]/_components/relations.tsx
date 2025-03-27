import { EntityCard } from "@/components/ui/entityCard";
import { useGetRelationsByIdQuery } from "@/graphql";

export const Relations = ({ id }: { id: number }) => {
  const { data, loading } = useGetRelationsByIdQuery({
    variables: { mediaId: Number(id), isMain: true },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const [relations] = data?.Page?.media || [];

  return (
    <div className="flex flex-wrap gap-3 items-start">
      {relations?.relations?.nodes?.map((node: any) => (
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

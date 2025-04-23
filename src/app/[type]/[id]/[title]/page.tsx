import { Score } from "./_components/score";
import { Separator } from "@/components/ui/separator";
import { StatusDistribution } from "./_components/statusDistribution";
import { getClient } from "@/utils/helpers/client";
import { GET_OVERVIEW } from "@/graphql/documents";

const EntityPage = async ({ params }: { params: { id: string; title: string } }) => {
  const { id } = await params;

  const { data } = await getClient().query({ query: GET_OVERVIEW, variables: { mediaId: Number(id) } });

  return (
    <div className="flex gap-4 w-full h-full">
      <div className="flex flex-col gap-6">
        <StatusDistribution statusDistribution={data?.Media?.stats?.statusDistribution || {}} />
        <Score scoreDistribution={data?.Media?.stats?.scoreDistribution || {}} />
      </div>
      <Separator orientation="vertical" className="w-[3px] h-[unset]" />
      <div>
        <div>Main characters</div>
      </div>
    </div>
  );
};
export default EntityPage;

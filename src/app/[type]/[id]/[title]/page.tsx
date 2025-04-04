import { Score } from "@/app/[type]/[id]/[title]/_components/score";
import { Separator } from "@/components/ui/separator";
import { StatusDistribution } from "@/app/[type]/[id]/[title]/_components/statusDistribution";

const EntityPage = async ({ params }: { params: { id: string; title: string } }) => {
  const { id } = await params;

  return (
    <div className="flex gap-4 w-full h-full">
      <div className="flex flex-col gap-6">
        <StatusDistribution id={id} />
        <Score id={id} />
      </div>
      <Separator orientation="vertical" className="w-[3px] h-[unset]" />
      <div>
        <div>Main characters</div>
      </div>
    </div>
  );
};
export default EntityPage;

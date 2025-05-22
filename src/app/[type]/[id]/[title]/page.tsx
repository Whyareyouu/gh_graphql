import { Score } from "./_components/score";
import { Separator } from "@/components/ui/separator";
import { StatusDistribution } from "./_components/statusDistribution";
import { getClient } from "@/utils/helpers/client";
import { GET_OVERVIEW } from "@/graphql/documents";
import { ReviewCard } from "./_components/reviewCard";
import { CharacterCard } from "./characters/_components/characterCard";
import { EntityCard } from "@/components/ui/entityCard";


const EntityPage = async ({ params }: { params: { id: string; title: string } }) => {
  const { id } = await params;

  const { data } = await getClient().query({ query: GET_OVERVIEW, variables: { mediaId: Number(id) } });

  const reviews = data?.Media?.reviews?.nodes ?? [];
  const characters = data?.Media?.characters?.edges ?? [];
  const recommendations = data?.Media?.recommendations?.nodes ?? [];
  
  console.log(data);
  return (
    <div className="flex gap-4 w-full h-full">
      <div className="flex flex-col gap-6">
        <StatusDistribution statusDistribution={data?.Media?.stats?.statusDistribution || {}} />
        <Score scoreDistribution={data?.Media?.stats?.scoreDistribution || {}} />
      </div>
      <Separator orientation="vertical" className="w-[3px] h-[unset]" />
      <div className="flex flex-col gap-6 w-full">
        <section className="flex flex-col">
          <p className="text-xl font-semibold">Main characters</p>
          <div className="flex gap-4">
            {characters.length > 0 ? (
              characters.map((character: any) => <CharacterCard key={character.id} {...character?.node} />)
            ) : (
              <p className="text-muted-foreground text-sm">No characters found.</p>
            )}
          </div>
        </section>
        <section className="flex flex-col">
          <p className="text-xl font-semibold">Recommendations</p>
          <div className="flex gap-4">
            {recommendations.length > 0 ? (
              recommendations.map((recommendation: any) => (
                <EntityCard
                  key={recommendation.id}
                  media={recommendation?.mediaRecommendation}
                  size="lg"
                  withHover={false}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No reviews found.</p>
            )}
          </div>
        </section>
        <section className="flex flex-col">
          <p className="text-xl font-semibold">Reviews</p>
          <div className="grid grid-cols-2 gap-4">
            {reviews.length > 0 ? (
              reviews.map((review: any) => <ReviewCard key={review.id} review={review} />)
            ) : (
              <p className="text-muted-foreground text-sm">No reviews found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export default EntityPage;

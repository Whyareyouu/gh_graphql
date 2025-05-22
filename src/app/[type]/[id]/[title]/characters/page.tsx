import { GET_CHARACTERS_BY_ID, GetCharactersByIdQuery } from "@/graphql";
import { getClient } from "@/utils/helpers/client";
import { CharacterCard } from "./_components/characterCard";

const Characters = async ({ params }: { params: { id: string; title: string } }) => {
  const { id } = await params;
  const { data } = await getClient().query<GetCharactersByIdQuery>({
    query: GET_CHARACTERS_BY_ID,
    variables: { mediaId: Number(id) },
  });

  const { characters } = data?.Media || {};

  return (
    <div className="grid grid-cols-3 gap-6">
      {characters?.nodes?.map((character) => <CharacterCard {...character} key={character?.id} />)}
    </div>
  );
};

export default Characters;

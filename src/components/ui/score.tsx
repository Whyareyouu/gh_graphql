import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card";
import Image from "next/image";
import { Progress } from "./progress";
import { TooltipWrapper } from "./tooltip";
import { GET_SCORE_DISTRIBUTION_BY_ID, ScoreDistribution } from "@/graphql";
import { getClient } from "@/utils/helpers/client";
import type { GetScoreDistributionByIdQuery } from "@/graphql";
// TODO: найти решение с фиксами типов
export const Score = async ({ id }: { id: string }) => {
  const { data } = await getClient().query<GetScoreDistributionByIdQuery>({
    query: GET_SCORE_DISTRIBUTION_BY_ID,
    variables: { mediaId: Number(id) },
  });

  const { scoreDistribution } = data?.Media?.stats || {};

  if (!scoreDistribution) {
    return null;
  }

  const typedScoreDistribution = scoreDistribution as Required<Omit<ScoreDistribution, "__typename">>[];

  const totalAmount = typedScoreDistribution?.reduce((sum, { amount }) => sum + (amount ?? 0), 0);

  const calculatedScorePercentage = typedScoreDistribution.map(({ score, amount }) => ({
    score: score,
    percentage: (((amount ?? 0) / totalAmount) * 100).toFixed(2),
  }));

  const avarageScore = (
    typedScoreDistribution.reduce((sum, { score, amount }) => sum + (score ?? 0) * (amount ?? 0), 0) / totalAmount
  ).toFixed(2);

  return (
    <Card className="max-w-xl w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>User ratings</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <span>{avarageScore}</span>
          <Image src="/star.svg" alt="rating icon" width={24} height={24} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {calculatedScorePercentage.map(({ score, percentage }) => (
          <div key={score} className="grid grid-cols-[2rem_1.5rem_1fr] items-center gap-1">
            <span>{score}</span>
            <Image src="/star.svg" alt="rating icon" width={24} height={24} />
            <TooltipWrapper text={`${percentage}%`}>
              <Progress value={+percentage} className="w-full" />
            </TooltipWrapper>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

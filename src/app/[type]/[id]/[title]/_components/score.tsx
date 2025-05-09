"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../../../components/ui/card";
import Image from "next/image";
import { Progress } from "../../../../../components/ui/progress";
import { TooltipWrapper } from "../../../../../components/ui/tooltip";
import { ScoreDistribution } from "@/graphql";
// TODO: найти решение с фиксами типов
export const Score = ({ scoreDistribution }: { scoreDistribution: any }) => {
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

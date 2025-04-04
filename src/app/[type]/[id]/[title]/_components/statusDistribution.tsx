import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Line } from "../../../../../components/ui/Line";
import { GET_STATUS_DISTRIBUTION_BY_ID, MediaListStatus } from "@/graphql";
import { capitalizeFirstLetter } from "@/utils";
import { Badge } from "../../../../../components/ui/badge";
import { statusDistributionColors } from "@/utils/helpers";
import { getClient } from "@/utils/helpers/client";

import type { GetStatusDistributionByIdQuery } from "@/graphql";

// TODO: Подумать над тем, как сделать эту часть более гибкой
const STATUS_COLORS: { [key in MediaListStatus]: string } = {
  [MediaListStatus.Current]: "#9256F3",
  [MediaListStatus.Planning]: "#02A9FF",
  [MediaListStatus.Completed]: "#68D639",
  [MediaListStatus.Dropped]: "#F779A4",
  [MediaListStatus.Paused]: "#E85D75",
  [MediaListStatus.Repeating]: "#dd13c2",
};

type AccType = {
  progress: React.ReactElement[];
  stats: React.ReactElement[];
};

export const StatusDistribution = async ({ id }: { id: string }) => {
  const { data } = await getClient().query<GetStatusDistributionByIdQuery>({
    query: GET_STATUS_DISTRIBUTION_BY_ID,
    variables: { mediaId: Number(id) },
  });

  const { statusDistribution } = data?.Media?.stats || {};

  if (!statusDistribution) {
    return null;
  }

  const totalAmount = statusDistribution?.reduce((acc, status) => acc + (status?.amount ?? 0), 0);

  const renderContent = statusDistribution.reduce(
    (acc: AccType, info) => {
      const { status, amount } = info || {};

      if (!status || !amount) return acc;

      const lineWidth = (amount / totalAmount) * 100;

      const statContent = (
        <div key={status} className="flex gap-2 flex-col ">
          <Badge colors={statusDistributionColors[status]}>{capitalizeFirstLetter(status)}</Badge>
          <span style={{ color: STATUS_COLORS[status] }}>{amount}</span>
        </div>
      );

      const progressContent = (
        <Line key={status} colors={statusDistributionColors[status]} style={{ maxWidth: `${lineWidth}%` }} />
      );

      return {
        progress: [...acc.progress, progressContent],
        stats: [...acc.stats, statContent],
      };
    },
    { progress: [], stats: [] },
  );

  return (
    <Card className="max-w-xl w-full">
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex justify-around">{renderContent.stats}</div>
        <div className="flex">{renderContent.progress}</div>
      </CardContent>
    </Card>
  );
};

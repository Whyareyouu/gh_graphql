"use client";

import { getFullDate, TDate } from "@/utils/helpers";
import { Badge } from "./badge";
import { MediaStatus } from "@/graphql";
import { statusColors } from "@/utils/helpers";

interface StatusProps {
  status: MediaStatus;
  date?: {
    startDate: TDate;
    endDate: TDate;
  };
}

export const Status = ({ status, date }: StatusProps) => {
  if (date) {
    return (
      <div>
        <Badge colors={statusColors[status]}>{status}</Badge>
        <span>
          from {getFullDate(date?.startDate)} {date?.endDate && `to ${getFullDate(date?.endDate)}`}
        </span>
      </div>
    );
  }
  return <Badge colors={statusColors[status]}>{status}</Badge>;
};

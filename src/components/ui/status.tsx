"use client";

import { getFullDate, TDate } from "@/utils/helpers";
import { Badge } from "./badge";
import { MediaStatus } from "@/graphql";
import { statusColors } from "@/utils/helpers";

interface StatusProps {
    status?: MediaStatus | null;
    date?: {
      startDate?: TDate;
      endDate?: TDate;
    };
}

export const Status = ({ status, date }: StatusProps) => {
  
  if(!status) return <span className="text-muted-foreground">Status not specified</span>

  const typedStatus = status as MediaStatus;

  if (date) {
    const typedDate = date as { startDate: TDate; endDate: TDate };
    return (
      <div>
        <Badge colors={statusColors[typedStatus]}>{typedStatus}</Badge>
        <span>
          from {getFullDate(typedDate?.startDate)} {date?.endDate && `to ${getFullDate(typedDate?.endDate)}`}
        </span>
      </div>
    );
  }
  return <Badge colors={statusColors[typedStatus]}>{typedStatus}</Badge>;
};

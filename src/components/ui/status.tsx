"use client";

import { getFullDate, TDate } from "@/utils/helpers";
import { Badge } from "./badge";

const StatusColors = {
  FINISHED: "#4CAF50",
  RELEASING: "#2196F3",
  NOT_YET_RELEASED: "#FFC107",
  CANCELLED: "#F44336",
  HIATUS: "#9C27B0",
} as const;

type StatusType = keyof typeof StatusColors;

interface StatusProps {
  status: StatusType;
  date?: {
    startDate: TDate;
    endDate: TDate;
  };
}

export const Status = ({ status, date }: StatusProps) => {
  if (date) {
    return (
      <div>
        <Badge variant="outline" bgColor={StatusColors[status]}>
          {status}
        </Badge>
        <span>
          from {getFullDate(date?.startDate)}{" "}
          {date?.endDate && `to ${getFullDate(date?.endDate)}`}
        </span>
      </div>
    );
  }
  return (
    <Badge variant="outline" bgColor={StatusColors[status]}>
      {status}
    </Badge>
  );
};

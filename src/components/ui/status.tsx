"use client";

import { getFullDate, TDate } from "@/utils/helpers";
import { Badge } from "./badge";

export type Statuses =
  | "FINISHED"
  | "RELEASING"
  | "NOT_YET_RELEASED"
  | "CANCELLED"
  | "HIATUS";

interface StatusProps {
  status: Statuses;
  date?: {
    startDate: TDate;
    endDate: TDate;
  };
}

export const Status = ({ status, date }: StatusProps) => {
  if (date) {
    return (
      <div>
        <Badge variant="classic" status={status}>
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
    <Badge variant="classic" status={status}>
      {status}
    </Badge>
  );
};

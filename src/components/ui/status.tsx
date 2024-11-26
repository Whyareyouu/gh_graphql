import { Badge } from "./badge";

const StatusColors = {
  FINISHED: "#4CAF50",
  RELEASING: "#2196F3",
  NOT_YET_RELEASED: "#FFC107",
  CANCELLED: "#F44336",
  HIATUS: "#9C27B0",
} as const;

type StatusType = keyof typeof StatusColors;

export const Status = ({ status }: { status: StatusType }) => {
  return <Badge bgColor={StatusColors[status]}>{status}</Badge>;
};

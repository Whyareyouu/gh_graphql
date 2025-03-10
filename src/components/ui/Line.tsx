import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers/shadcnui";
import { MediaListStatus } from "@/graphql";

const lineVariants = cva("h-3 w-full max-w-max", {
  variants: {
    status: {
      [MediaListStatus.Current]: "bg-[#9256F3]",
      [MediaListStatus.Planning]: "bg-[#02A9FF]",
      [MediaListStatus.Completed]: "bg-[#68D639]",
      [MediaListStatus.Dropped]: "bg-[#F779A4]",
      [MediaListStatus.Paused]: "bg-[#E85D75]",
      [MediaListStatus.Repeating]: "#dd13c2",
    },
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lineVariants> {}

function Line({ className, status, ...props }: BadgeProps) {
  return <div className={cn(lineVariants({ status }), className)} {...props} />;
}

export { Line, lineVariants };

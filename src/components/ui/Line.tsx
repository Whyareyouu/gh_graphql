import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers/shadcnui";

const lineVariants = cva("h-3 w-full max-w-max", {
  variants: {
    status: {
      CURRENT: "bg-[#68D639]",
      PLANNING: "bg-[#02A9FF]",
      COMPLETED: "bg-[#9256F3]",
      DROPPED: "bg-[#F779A4]",
      PAUSED: "bg-[#E85D75]",
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

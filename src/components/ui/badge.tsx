import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers/shadcnui";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        classic: "text-white",
      },
      status: {
        FINISHED: "bg-status-finished",
        RELEASING: "bg-status-releasing",
        NOT_YET_RELEASED: "bg-status-notYetReleased",
        CANCELLED: "bg-status-cancelled",
        HIATUS: "bg-status-hiatus",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, status, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, status }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

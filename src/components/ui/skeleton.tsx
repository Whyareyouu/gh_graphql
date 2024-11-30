import { cn } from "@/utils/helpers/shadcnui";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const skeletonVariants = cva("animate-pulse rounded-md bg-primary/10", {
  variants: {
    variant: {
      full: "w-full h-full",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ variant }), className)} {...props} />
  );
}

export { Skeleton, skeletonVariants };

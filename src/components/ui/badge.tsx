import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers/shadcnui";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        classic: "text-white text-sm",
      },
      colors: {
        greenAccent: "bg-green-accent",
        lightGreenAccent: "bg-light-green-accent",
        blueAccent: "bg-blue-accent",
        yellowAccent: "bg-yellow-accent",
        redAccent: "bg-red-accent",
        purpleAccent: "bg-purple-accent",
        pinkAccent: "bg-pink-accent",
        violetAccent: "bg-violet-accent",
        cyanAccent: "bg-cyan-accent",
        salmonAccent: "bg-salmon-accent",
        magentaAccent: "bg-magenta-accent",
      },
    },
    defaultVariants: {
      variant: "classic",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, colors, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, colors }), className)} {...props} />;
}

export { Badge, badgeVariants };

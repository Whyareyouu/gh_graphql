import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers/shadcnui";

const lineVariants = cva("h-3 w-full max-w-max", {
  variants: {
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
});

export interface LineProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof lineVariants> {}

function Line({ className, colors, ...props }: LineProps) {
  return <div className={cn(lineVariants({ colors }), className)} {...props} />;
}

export { Line, lineVariants };

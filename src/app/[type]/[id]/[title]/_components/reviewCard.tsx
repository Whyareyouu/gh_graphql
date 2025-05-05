"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";

type ReviewCardProps = {
  review: {
    id: number;
    summary: string;
    rating: number;
    ratingAmount: number;
    score: number;
    createdAt: number;
    user: {
      id: number;
      name: string;
      avatar: {
        medium: string;
      };
    };
  };
};

const MAX_LENGTH = 200;

export const ReviewCard = ({ review }: { review: ReviewCardProps["review"] }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.summary.length > MAX_LENGTH;
  const summary = expanded ? review.summary : review.summary.slice(0, MAX_LENGTH);

  const date = new Date(review.createdAt * 1000).toLocaleDateString();

  return (
    <Card className="w-full max-w-lg p-4 rounded-2xl shadow-md bg-background border border-border">
      <div className="flex items-start gap-4">
        <Avatar>
          <Image src={review.user.avatar.medium} alt={`${review.user.name}'s avatar`} width={48} height={48} />
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg">{review.user.name}</div>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-yellow-500" />
              <span>{review.score}/100</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUpIcon className="w-4 h-4 text-green-500" />
              <span>{review.rating} helpful</span>
            </div>
          </div>
          <CardContent className="px-0 pt-3 text-sm text-foreground leading-snug">
            {summary}
            {isLong && !expanded && <span className="text-muted-foreground">...</span>}
            {isLong && (
              <Button
                variant="link"
                className="h-auto px-1 text-sm text-primary ml-1"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Скрыть" : "Показать всё"}
              </Button>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

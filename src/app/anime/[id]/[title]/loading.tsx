import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="flex justify-between gap-8">
        <div>
          <Skeleton className="w-[225px] h-[320px]" />
        </div>
        <div className="flex-1">
          <Skeleton />
        </div>
        <div className="flex flex-col gap-1 max-w-sm w-full">
          <div className="flex">
            Romaji: <Skeleton />
          </div>
          <div className="flex">
            English: <Skeleton />
          </div>
          <div className="flex">
            Native: <Skeleton />
          </div>
          <div className="flex">
            Genres: <Skeleton />
          </div>
          <div className="flex">
            Episode&nbsp;Duration: <Skeleton />
          </div>
          <div className="flex">
            Status:
            <Skeleton />
          </div>
          <div className="flex">
            Episodes: <Skeleton />
          </div>
          <div className="flex">
            Format: <Skeleton />
          </div>
          <div className="flex">
            Season: <Skeleton />
          </div>
          <div className="flex">
            Studios: <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export const LivePreviewSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <Skeleton className="h-6 w-32 rounded-full" />
      <Skeleton className="h-8 w-48 rounded-full" />
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-5 w-24 rounded" />
        <Skeleton className="h-4 w-32 rounded" />
        <Skeleton className="h-4 w-40 rounded" />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Skeleton className="h-10 w-full rounded-full bg-blue-300" />
        <Skeleton className="h-10 w-full rounded-full bg-red-300" />
        <Skeleton className="h-10 w-full rounded-full bg-orange-300" />
        <Skeleton className="h-10 w-full rounded-full bg-black/50" />
      </div>
    </div>
  );
};

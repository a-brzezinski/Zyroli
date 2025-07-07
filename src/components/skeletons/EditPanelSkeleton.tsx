import { Skeleton } from "@/components/ui/skeleton";

export const EditPanelSkeleton = () => {
  return (
    <div className="flex w-full flex-col space-y-6">
      <Skeleton className="h-32 w-full rounded-xl" />

      {[...Array(5)].map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-4 w-1/3" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>
      ))}
    </div>
  );
};

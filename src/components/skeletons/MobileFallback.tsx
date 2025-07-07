export const MobileFallback = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800">Editor is available on desktop only</h1>
        <p className="mt-3 text-sm text-gray-600">
          Please log in from a laptop or desktop computer to edit your content.
        </p>
      </div>
    </div>
  );
};

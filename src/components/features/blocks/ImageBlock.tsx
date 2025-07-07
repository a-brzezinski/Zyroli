import Image from "next/image";

interface Props {
  avatarUrl: string | null;
  mode: "preview" | "live";
}

export const ImageBlock = ({ avatarUrl, mode }: Props) => {
  const isPreview = mode === "preview";

  const size = isPreview ? "h-24 w-24" : "h-32 w-32";
  const borderColor = isPreview ? "border-violet-300" : "border-white";
  const shadow = isPreview ? "shadow-md" : "shadow-lg";
  const marginBottom = isPreview ? "mb-6" : "mb-4";

  return (
    <div className={`${marginBottom} flex justify-center`}>
      <div
        className={`flex items-center justify-center overflow-hidden rounded-full border-4 ${borderColor} bg-gradient-to-b from-[#8a60f0] to-[#5248e3] ${shadow} ${size}`}
      >
        <Image
          src={avatarUrl || "/ghost.svg"}
          alt="Avatar"
          width={isPreview ? 96 : 128}
          height={isPreview ? 96 : 128}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

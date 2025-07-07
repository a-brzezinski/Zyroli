import Link from "next/link";

interface Props {
  username: string | undefined;
}

export const LivePreviewUrlBar = ({ username }: Props) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="w-fit rounded-md border border-gray-300 bg-gray-100 px-4 py-2 font-mono text-sm shadow-inner">
        <Link href={`/${username}`} target="_blank">
          www.zyroli.com/{username}
        </Link>
      </div>
    </div>
  );
};

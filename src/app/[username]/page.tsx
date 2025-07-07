import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BioBlock } from "@/components/features/blocks/BioBlock";
import { HeadingBlock } from "@/components/features/blocks/HeadingBlock";
import { ImageBlock } from "@/components/features/blocks/ImageBlock";
import { LinkBlock } from "@/components/features/blocks/LinkBlock";
import { SubheadingBlock } from "@/components/features/blocks/SubheadingBlock";
import prisma from "@/lib/prisma";

interface Props {
  params: Promise<{ username: string }>;
}

export default async function ProfilePage(props: Props) {
  const { username } = await props.params;

  const user = await prisma.user.findUnique({
    where: { name: username },
    include: {
      profile: {
        include: {
          links: true,
        },
      },
    },
  });

  if (!user || !user.profile || user.profile.profileVisible === false) {
    return notFound();
  }

  const avatarUrl = user.profile.avatar === "" ? "/ghost.svg" : user.profile.avatar;
  return (
    <div className="min-h-screen" style={{ backgroundColor: user.profile.backgroundColor }}>
      <div className="mx-auto flex max-w-4xl flex-col items-center p-4 text-center">
        <ImageBlock avatarUrl={avatarUrl} mode="live" />
        <HeadingBlock mode="live" heading={{ color: user.profile.headingColor, text: user.profile.headingText }} />
        <SubheadingBlock
          mode="live"
          subheading={{
            color: user.profile.subheadingColor,
            text: user.profile.subheadingText,
          }}
        />
        <BioBlock
          bio={{
            color: user.profile.bioColor,
            text: user.profile.bioText,
          }}
        />
        {user.profile.links.length > 0 && (
          <div className="mt-4 flex w-full max-w-md flex-col gap-4">
            {user.profile.links.map(
              link =>
                link.isVisible && (
                  <LinkBlock
                    key={link.id}
                    mode="live"
                    link={{
                      icon: link.icon,
                      iconColor: link.iconColor,
                      label: link.label,
                      url: link.url,
                      isVisible: link.isVisible,
                    }}
                  />
                )
            )}
          </div>
        )}
      </div>
      <footer className="w-full py-6 text-center text-xs text-gray-500">
        <p>Powered by</p>

        <Link href="/" className="mt-2 ml-1 inline-flex items-center gap-1 hover:text-gray-700">
          <Image src="/icon.png" alt="Zyroli icon" width={16} height={16} className="inline-block align-middle" />
          <span className="leading-none">Zyroli</span>
        </Link>
      </footer>
    </div>
  );
}

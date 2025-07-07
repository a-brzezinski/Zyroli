import { useSession } from "@/lib/auth/auth-client";
import useEditorStore from "@/lib/store/editorStore";

import { BioBlock } from "../blocks/BioBlock";
import { HeadingBlock } from "../blocks/HeadingBlock";
import { ImageBlock } from "../blocks/ImageBlock";
import { LinkBlock } from "../blocks/LinkBlock";
import { SubheadingBlock } from "../blocks/SubheadingBlock";
import { LivePreviewUrlBar } from "./components/LivePreviewUrlBar";

export const LivePreview = () => {
  const session = useSession();
  const { bio, heading, subheading, links } = useEditorStore(state => state.profile);
  const avatar = useEditorStore(state => state.profile.avatar);
  const backgroundColor = useEditorStore(state => state.backgroundColor);

  const avatarUrl = typeof avatar === "string" ? avatar : avatar instanceof File ? URL.createObjectURL(avatar) : null;

  return (
    <div className="h-full rounded-xl p-4 select-none" style={{ backgroundColor }}>
      <h2 className="mb-4 text-center text-2xl font-bold">Live Preview</h2>
      <LivePreviewUrlBar username={session.data?.user.name} />
      <ImageBlock mode="preview" avatarUrl={avatarUrl} />
      <HeadingBlock mode="preview" heading={heading} />
      <SubheadingBlock mode="preview" subheading={subheading} />
      <BioBlock bio={bio} />
      <div className="mt-4 flex flex-col gap-2">
        {links.map((link, index) => (
          <LinkBlock key={index} mode="preview" link={link} />
        ))}
      </div>
    </div>
  );
};

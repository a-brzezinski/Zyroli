import { TabsContent } from "@/components/ui/tabs";
import useEditorStore from "@/lib/store/editorStore";

import { BioArea } from "../components/BioArea";
import { HeadingInput } from "../components/HeadingInput";
import { ImagePicker } from "../components/ImagePicker";
import { LinkInput } from "../components/LinkInput";
import { SubHeadingInput } from "../components/SubHeadingInput";

export const ProfileTab = () => {
  const links = useEditorStore(state => state.profile.links);
  return (
    <TabsContent value="profile">
      <div className="mt-4 flex flex-col gap-4">
        <ImagePicker />
        <HeadingInput />
        <SubHeadingInput />
        <BioArea />
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkInput
              value={link.url}
              key={index}
              label={`Link ${index + 1}`}
              htmlFor={`link-input-${index}`}
              order={index}
              customLabel={link.label}
            />
          ))}
        </div>
      </div>
    </TabsContent>
  );
};

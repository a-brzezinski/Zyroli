import { TabsContent } from "@/components/ui/tabs";
import useEditorStore from "@/lib/store/editorStore";

import ColorPickerField from "../components/ColorPickerField";

export const AppearanceTab = () => {
  const headingColor = useEditorStore((state) => state.profile.heading.color);
  const subheadingColor = useEditorStore(
    (state) => state.profile.subheading.color
  );
  const bioColor = useEditorStore((state) => state.profile.bio.color);
  const backgroundColor = useEditorStore((state) => state.backgroundColor);

  const { updateHeading, updateSubheading, updateBio, setBackgroundColor } =
    useEditorStore((state) => state);

  return (
    <TabsContent value="appearance">
      <div className="mt-4 text-white space-y-6 ">
        <ColorPickerField
          label="Background color"
          color={backgroundColor}
          onChange={(newColor) => setBackgroundColor(newColor)}
        />

        <div className="flex gap-2">
          <ColorPickerField
            label="Heading color"
            color={headingColor}
            onChange={(newColor) => updateHeading({ color: newColor })}
          />

          <ColorPickerField
            label="Subheading color"
            color={subheadingColor}
            onChange={(newColor) => updateSubheading({ color: newColor })}
          />
        </div>
        <ColorPickerField
          label="Bio color"
          color={bioColor}
          onChange={(newColor) => updateBio({ color: newColor })}
        />
      </div>
    </TabsContent>
  );
};

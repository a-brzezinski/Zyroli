"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useValidatedField } from "@/hooks/useValidatedField";
import { bioSchema } from "@/lib/schemas/profileSchema";
import useEditorStore from "@/lib/store/editorStore";

export const BioArea = () => {
  const { bio } = useEditorStore((state) => state.profile);
  const { updateBio } = useEditorStore((state) => state);
  const { value, error, handleOnChange } = useValidatedField(
    bio,
    updateBio,
    bioSchema
  );
  return (
    <div className="space-y-2">
      <Label htmlFor="bio" className="text-sm font-semibold text-white">
        Your Bio
      </Label>
      <Textarea
        id="bio"
        value={value}
        onChange={handleOnChange}
        placeholder="Write a brief bio about yourself. This will be displayed on your profile page."
        className="bg-white/50"
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
};

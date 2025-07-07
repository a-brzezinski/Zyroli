"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useValidatedField } from "@/hooks/useValidatedField";
import { subheadingSchema } from "@/lib/schemas/profileSchema";
import useEditorStore from "@/lib/store/editorStore";

export const SubHeadingInput = () => {
  const { subheading } = useEditorStore((state) => state.profile);
  const { updateSubheading } = useEditorStore((state) => state);

  const { value, error, handleOnChange } = useValidatedField(
    subheading,
    updateSubheading,
    subheadingSchema
  );

  return (
    <div className="space-y-2">
      <Label htmlFor="subheading" className="text-sm font-semibold text-white">
        Subheading
      </Label>
      <Input
        id="subheading"
        value={value}
        onChange={handleOnChange}
        placeholder="Your Profession or Tagline"
        className="bg-white/50"
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
};

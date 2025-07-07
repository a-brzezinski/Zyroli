"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useValidatedField } from "@/hooks/useValidatedField";
import { headingSchema } from "@/lib/schemas/profileSchema";
import useEditorStore from "@/lib/store/editorStore";

export const HeadingInput = () => {
  const { heading } = useEditorStore((state) => state.profile);
  const { updateHeading } = useEditorStore((state) => state);

  const { value, error, handleOnChange } = useValidatedField(
    heading,
    updateHeading,
    headingSchema
  );

  return (
    <div className="space-y-2">
      <Label htmlFor="heading" className="text-sm font-semibold text-white">
        Heading
      </Label>
      <Input
        id="heading"
        value={value}
        onChange={handleOnChange}
        placeholder="Enter your heading"
        className="bg-white/50"
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
};

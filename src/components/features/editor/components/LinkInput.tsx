import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buildLinkFromUrl, matchersArray } from "@/helpers/icons";
import { urlSchema } from "@/lib/schemas/profileSchema";
import useEditorStore from "@/lib/store/editorStore";
import useErrorStore from "@/lib/store/errorStore";

interface Props {
  label: string;
  htmlFor?: string;
  order: number;
  value: string;
  customLabel?: string;
}

export const LinkInput = ({ label, htmlFor, order, value, customLabel }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const updateLink = useEditorStore(state => state.updateLink);
  const setCustomLabel = useEditorStore(state => state.setCustomLabel);
  const { setError: setGlobalError, clearError: clearGlobalError } = useErrorStore();

  const handleChange = (value: string) => {
    const result = urlSchema.safeParse(value);
    if (!result.success) {
      const message = result.error.errors[0].message;
      setError(message);
      setGlobalError("link", message);
      return;
    }
    setError(null);
    clearGlobalError("link");
    const link = buildLinkFromUrl(value);
    updateLink(link, order);
  };

  const isUnsupportedLink = !matchersArray.some(matcher => value.includes(matcher));

  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-white">
        {label}
      </Label>
      <Input
        id={htmlFor}
        onChange={e => handleChange(e.target.value)}
        value={value}
        placeholder="Enter your link"
        className="bg-white/50"
      />
      <p className="text-xs text-white/80">
        The link should start with <code>https://</code>, to work properly.
      </p>
      {isUnsupportedLink && value.includes(".com") && (
        <Input
          className="bg-white/50"
          placeholder="Enter your label"
          value={customLabel || ""}
          onChange={e => setCustomLabel(e.target.value, order)}
        />
      )}
      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
    </div>
  );
};

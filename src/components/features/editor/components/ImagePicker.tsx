"use client";

import { Camera } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useEditorStore from "@/lib/store/editorStore";

export const ImagePicker = () => {
  const setAvatar = useEditorStore((state) => state.setAvatar);
  const ref = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      setAvatar(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        type="file"
        accept="image/jpeg, image/png"
        ref={ref}
        onChange={handleFileChange}
        className="hidden"
      />

      <Button
        variant="outline"
        onClick={() => ref.current?.click()}
        className="flex items-center gap-2 text-sm w-full"
      >
        <Camera className="w-4 h-4" />
        Change Avatar
      </Button>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

type ColorPickerFieldProps = {
  label: string;
  color: string;
  onChange: (color: string) => void;
};

const ColorPickerField = ({
  label,
  color,
  onChange,
}: ColorPickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="space-y-2 w-full" ref={containerRef}>
      <label className="block text-base font-semibold text-white">
        {label}
      </label>

      <div className="relative">
        <div
          className="w-full h-10 rounded-md border border-white cursor-pointer shadow-md transition hover:brightness-110"
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker((prev) => !prev)}
          title={`Click to change ${label.toLowerCase()}`}
        />

        {showPicker && (
          <div className="absolute z-50 top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg p-2 shadow-lg">
            <HexColorPicker color={color} onChange={onChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPickerField;

import { TextFieldConfig } from "@/@types/store";

interface Props {
  subheading: TextFieldConfig;
  mode: "preview" | "live";
}

export const SubheadingBlock = ({ mode, subheading }: Props) => {
  const textSize = mode === "preview" ? "text-xl" : "text-2xl";

  return (
    <h3 className={`text-center font-semibold ${textSize}`} style={{ color: subheading.color }}>
      {subheading.text}
    </h3>
  );
};

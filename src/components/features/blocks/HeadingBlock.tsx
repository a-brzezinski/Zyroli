import { TextFieldConfig } from "@/@types/store";

interface Props {
  heading: TextFieldConfig;
  mode: "preview" | "live";
}

export const HeadingBlock = ({ heading, mode }: Props) => {
  const textSize = mode === "preview" ? "text-3xl" : "text-4xl";

  return (
    <h2 className={`text-center font-bold ${textSize}`} style={{ color: heading.color }}>
      {heading.text}
    </h2>
  );
};

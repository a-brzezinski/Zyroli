import { TextFieldConfig } from "@/@types/store";

interface Props {
  bio: TextFieldConfig;
}

export const BioBlock = ({ bio }: Props) => {
  return (
    <p className="mt-2 text-center whitespace-pre-line" style={{ color: bio.color }}>
      {bio.text}
    </p>
  );
};

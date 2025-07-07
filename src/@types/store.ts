import { PayloadState } from "@/actions/update-profile";

export interface TextFieldConfig {
  text: string;
  color: string;
}

export interface Link {
  url: string;
  icon: string;
  label: string;
  isVisible: boolean;
  iconColor: string;
}
export interface State {
  profileVisible: boolean;
  backgroundColor: string;
  profile: {
    heading: TextFieldConfig;
    subheading: TextFieldConfig;
    avatar: string | File;
    bio: TextFieldConfig;
    links: Link[];
  };
  original: PayloadState | null;
}

export type UpdateLinkPayload = Omit<Link, "isVisible">;

export interface Actions {
  updateSubheading: (partial: Partial<TextFieldConfig>) => void;
  updateBio: (partial: Partial<TextFieldConfig>) => void;
  updateHeading: (partial: Partial<TextFieldConfig>) => void;
  setAvatar: (avatar: string | File) => void;
  setBackgroundColor: (color: string) => void;
  updateLink: (link: UpdateLinkPayload, index: number) => void;
  setCustomLabel: (label: string, index: number) => void;
  setProfileVisible: (visible: boolean) => void;
  initState: (state: Partial<State>) => void;
}

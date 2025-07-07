import { State } from "@/@types/store";

export const initialState: State = {
  profileVisible: true,
  backgroundColor: "#ffffff",
  profile: {
    heading: {
      text: "Your Name",
      color: "#aabbcc",
    },
    subheading: {
      text: "",
      color: "#ddeeff",
    },
    bio: {
      text: "",
      color: "#f0f0f0",
    },
    avatar: "",
    links: [
      {
        url: "",
        icon: "FaLink",
        label: "",
        iconColor: "#000000",
        isVisible: false,
      },
      {
        url: "",
        icon: "FaLink",
        label: "",
        iconColor: "#000000",
        isVisible: false,
      },
      {
        url: "",
        icon: "FaLink",
        label: "",
        iconColor: "#000000",
        isVisible: false,
      },
      {
        url: "",
        icon: "FaLink",
        label: "",
        iconColor: "#000000",
        isVisible: false,
      },
    ],
  },
  original: null,
};

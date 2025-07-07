import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaPinterestP,
  FaSnapchatGhost,
  FaTelegramPlane,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

import { UpdateLinkPayload } from "@/@types/store";

export const icons = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaTwitter,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
  snapchat: FaSnapchatGhost,
  pinterest: FaPinterestP,
  discord: FaDiscord,
  twitch: FaTwitch,
  telegram: FaTelegramPlane,
  onlyfans: SiOnlyfans,
};

export const iconComponents = {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaSnapchatGhost,
  FaPinterestP,
  FaDiscord,
  FaTwitch,
  FaTelegramPlane,
  FaLink,
  SiOnlyfans,
  FaGithub,
  FaGitlab,
};

const platformSettings = {
  instagram: {
    icon: "FaInstagram",
    color: "#E1306C",
    label: "Instagram",
    matchers: ["instagram.com"],
  },
  youtube: {
    icon: "FaYoutube",
    color: "#FF0000",
    label: "YouTube",
    matchers: ["youtube.com", "youtu.be"],
  },
  x: {
    icon: "FaTwitter",
    color: "#000000",
    label: "X (Twitter)",
    matchers: ["x.com", "twitter.com"],
  },
  facebook: {
    icon: "FaFacebook",
    color: "#1877F2",
    label: "Facebook",
    matchers: ["facebook.com"],
  },
  linkedin: {
    icon: "FaLinkedin",
    color: "#0077B5",
    label: "LinkedIn",
    matchers: ["linkedin.com"],
  },
  tiktok: {
    icon: "FaTiktok",
    color: "#010101",
    label: "TikTok",
    matchers: ["tiktok.com"],
  },
  snapchat: {
    icon: "FaSnapchatGhost",
    color: "#fcba03",
    label: "Snapchat",
    matchers: ["snapchat.com"],
  },
  pinterest: {
    icon: "FaPinterestP",
    color: "#E60023",
    label: "Pinterest",
    matchers: ["pinterest.com"],
  },
  discord: {
    icon: "FaDiscord",
    color: "#5865F2",
    label: "Discord",
    matchers: ["discord.gg", "discord.com"],
  },
  twitch: {
    icon: "FaTwitch",
    color: "#9146FF",
    label: "Twitch",
    matchers: ["twitch.tv"],
  },
  telegram: {
    icon: "FaTelegramPlane",
    color: "#0088CC",
    label: "Telegram",
    matchers: ["t.me", "telegram.me"],
  },
  onlyfans: {
    icon: "SiOnlyfans",
    color: "#000000",
    label: "OnlyFans",
    matchers: ["onlyfans.com"],
  },
  link: {
    icon: "FaLink",
    color: "#000000",
    label: "Link",
    matchers: [],
  },
  github: {
    icon: "FaGithub",
    color: "#000000",
    label: "GitHub",
    matchers: ["github.com"],
  },
  gitlab: {
    icon: "FaGitlab",
    color: "#FC6D26",
    label: "GitLab",
    matchers: ["gitlab.com"],
  },
};

export const matchersArray = Object.values(platformSettings).flatMap(settings => settings.matchers);

export function buildLinkFromUrl(url: string): UpdateLinkPayload {
  const lowerUrl = url.toLowerCase();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [platform, settings] of Object.entries(platformSettings)) {
    if (settings.matchers.some(matcher => lowerUrl.includes(matcher))) {
      return {
        url,
        icon: settings.icon,
        label: settings.label,
        iconColor: settings.color,
      };
    }
  }

  return {
    url,
    icon: "FaLink",
    label: "Link",
    iconColor: "#000000",
  };
}

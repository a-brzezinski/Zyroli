import { Link } from "@/@types/store";
import { Button } from "@/components/ui/button";
import { iconComponents } from "@/helpers/icons";

interface Props {
  link: Link;
  mode: "preview" | "live";
}

export const LinkBlock = ({ link, mode }: Props) => {
  const Icon = iconComponents[link.icon as keyof typeof iconComponents];

  if (link.url === "" && !link.isVisible) {
    return null;
  }

  const sharedStyles = {
    backgroundColor: link.iconColor,
  };

  const iconClass = "mr-2 text-white";

  if (mode === "preview") {
    return (
      <Button className="cursor-auto" style={sharedStyles}>
        <Icon className={iconClass} />
        {link.label}
      </Button>
    );
  }

  return (
    <Button asChild style={sharedStyles}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <Icon className={iconClass} />
        {link.label}
      </a>
    </Button>
  );
};

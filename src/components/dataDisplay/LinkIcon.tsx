import { LinkType } from "../../interfaces/data.interface";

import { Icon } from "../ui-library/Icon";

interface LinkIconProps {
  link: LinkType;
}

export const LinkIcon = ({ link }: LinkIconProps) => {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <Icon icon={link.icon} alt={link.title} />
    </a>
  );
};

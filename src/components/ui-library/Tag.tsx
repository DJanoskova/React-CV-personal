import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="text-xs py-0.5 px-2 bg-gray-100 rounded">{children}</span>
  );
};

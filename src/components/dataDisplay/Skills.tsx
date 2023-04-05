import { ReactNode } from "react";
import { Typography } from "../ui-library/Typography";

interface SkillsProps {
  skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="mt-0 mb-16">
      <Typography variant="h2" className="mb-4">
        Skills & Tools
      </Typography>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            className="bg-gray-900 text-white px-1 text-sm -skew-x-6"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

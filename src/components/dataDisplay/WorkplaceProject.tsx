import { WorkplaceProjectType } from "../../interfaces/data.interface";
import { WorkProjectGraphics } from "../graphics/WorkProjectGraphics";

import { Tag } from "../ui-library/Tag";
import { Typography } from "../ui-library/Typography";

interface WorkplaceProjectProps {
  project: WorkplaceProjectType;
}

export const WorkplaceProject = ({ project }: WorkplaceProjectProps) => {
  return (
    <div className="whitespace-pre-wrap relative">
      <WorkProjectGraphics />
      <Typography variant="body" className="mb-2">
        {project.description}
      </Typography>
      <div className="flex gap-2">
        {project.stack.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </div>
  );
};

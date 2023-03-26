import { compareAsc, format } from "date-fns";

import { WorkplaceType } from "../../interfaces/data.interface";

import { WorkplaceGraphics } from "../graphics/WorkplaceGraphics";
import { Typography } from "../ui-library/Typography";
import { WorkplaceProject } from "./WorkplaceProject";

interface WorkplaceProps {
  workplace: WorkplaceType;
}

export const Workplace = ({ workplace }: WorkplaceProps) => {
  const startedAt = new Date(workplace.startedAt);
  const displayedDate = format(startedAt, "MMM R");

  return (
    <div className="relative pb-12">
      <WorkplaceGraphics />
      <div className="flex items-center relative -top-3 gap-4">
        <Typography variant="body">{displayedDate}</Typography>
        <div className="-left-0 h-[1px] w-[200px] bg-gray-900" />
      </div>
      <Typography variant="h4" className="mb-2">
        {workplace.name} -{" "}
        <span className="text-gray-500 font-normal">{workplace.position}</span>
      </Typography>
      <div className="flex flex-col gap-5">
        {workplace.projects.map((project) => (
          <WorkplaceProject project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

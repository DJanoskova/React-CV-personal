import { FreeTimeProjectType } from "../../interfaces/data.interface";
import { Typography } from "../ui-library/Typography";

interface FreeTimeProjectProps {
  project: FreeTimeProjectType;
}

export const FreeTimeProject = ({ project }: FreeTimeProjectProps) => {
  return (
    <div>
      <Typography variant="h4" className="mb-2">
        <a
          href={project.url}
          className="underline"
          rel="noreferrer noopener"
          target="_blank"
        >
          {project.title}
        </a>{" "}
        - <span className="text-gray-500 font-normal">{project.subtitle}</span>
      </Typography>
      <p className="text-sm">{project.technologies}</p>
      <Typography variant="body">{project.summary}</Typography>
    </div>
  );
};

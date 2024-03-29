import { DATA_CV } from "./const/data.const";

import { FreeTimeProject } from "./components/dataDisplay/FreeTimeProject";
import { LinkIcon } from "./components/dataDisplay/LinkIcon";
import { Skills } from "./components/dataDisplay/Skills";
import { Workplace } from "./components/dataDisplay/Workplace";
import { HeaderGraphics } from "./components/graphics/HeaderGraphics";
import { Typography } from "./components/ui-library/Typography";

function App() {
  return (
    <div className="">
      <HeaderGraphics />

      <div className="w-[21cm] max-w-full mx-auto px-6 md:px-16 py-8 md:py-14 relative">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Typography variant="h1">Dana Janoskova</Typography>
            <br />
            <Typography variant="h2">Software Engineer - 10 YOE</Typography>
            <p className="text-sm text-gray-500 mt-2">Prague, Czech Republic</p>
          </div>
        </div>
        <div className="mb-12">
          <p>
            I'm a full stack engineer with a front-end focus, and I'm
            experienced in working with React, React Native, Typescript and
            Node.js. In the past, I have also worked with Vue and Flutter. I
            have a strong commitment to delivering high-quality code that is
            easy to maintain and performant.
          </p>
          <p>
            React is one of my passions, and I love staying up-to-date with the
            latest best practices. I've published a few articles on Medium to
            share my knowledge and experience with other developers. I've also
            created several open-source libraries for React and Vue.js, and I'm
            always looking for new ways to contribute to the community. In the
            past year I've also picked up React Native and published an
            application in the App Store.
          </p>
        </div>

        <Skills skills={DATA_CV.skills} />

        <div>
          <Typography variant="h2" className="mb-6">
            Workplaces
          </Typography>
          {DATA_CV.workplaces.map((workplace) => (
            <Workplace key={workplace.name} workplace={workplace} />
          ))}
          <p>
            A more extensive list of my experience is available on my{" "}
            <a
              href="https://www.linkedin.com/in/dana-janoskova/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="mt-12 mb-12">
          <Typography variant="h2" className="mb-8">
            Personal projects
          </Typography>
          <p>
            In addition to my full-time work, I also enjoy creating smaller
            projects that are free to use and sometimes open-source. One of my
            most popular projects is the online version of the BANG! card game.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {DATA_CV.projects.map((project) => (
            <FreeTimeProject project={project} key={project.title} />
          ))}
        </div>

        <div className="flex gap-6 mt-12">
          {DATA_CV.links.map((link) => (
            <LinkIcon key={link.url} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

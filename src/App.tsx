import photo from "./assets/photo.jpeg";

import { FreeTimeProject } from "./components/dataDisplay/FreeTimeProject";
import { LinkIcon } from "./components/dataDisplay/LinkIcon";
import { Workplace } from "./components/dataDisplay/Workplace";
import { HeaderGraphics } from "./components/graphics/HeaderGraphics";
import { Typography } from "./components/ui-library/Typography";
import { DATA_CV } from "./const/data.const";

function App() {
  return (
    <div className="">
      <HeaderGraphics />

      <div className="w-[21cm] mx-auto px-16 py-14 relative">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Typography variant="h1">Dana Janoskova</Typography>
            <br />
            <Typography variant="h2">Software Engineer</Typography>
          </div>
          <img
            src={photo}
            alt="Dana Janoskova CV"
            className="rounded-full w-40 h-40"
          />
        </div>
        <div className="mb-12">
          <p>
            I'm a full stack engineer with a front-end focus, and I'm highly
            experienced in working with React, Typescript, and Node.js. In the
            past, I have also worked with Vue and Flutter. I have a strong
            commitment to delivering high-quality code that is easy to maintain
            and performant. I'm dedicated to creating great user experiences,
            and I always take the time to ensure that my work meets the highest
            standards of quality, user-friendliness, and maintainability.
          </p>
          <p>
            React is one of my passions, and I love staying up-to-date with the
            latest best practices. I've published a few articles on Medium to
            share my knowledge and experience with other developers. I've also
            created several open-source libraries for React and Vue.js, and I'm
            always looking for new ways to contribute to the community.
          </p>
        </div>

        {DATA_CV.workplaces.map((workplace) => (
          <Workplace key={workplace.name} workplace={workplace} />
        ))}

        <div className="mt-12 mb-12">
          <p>
            In addition to my work on larger projects, I also enjoy creating
            smaller projects that are free to use and sometimes open-source. One
            of my most popular projects is the online version of the BANG! card
            game. Overall, I'm a passionate developer who is committed to
            delivering excellent work and improving the lives of users through
            great software.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {DATA_CV.projects.map((project) => (
            <FreeTimeProject project={project} />
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

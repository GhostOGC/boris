import Project from "./Project";
import Showreel from "../../Media/Showreel/Showreel.jpg";
import Shanghai from "../../Media/Shanghai4am/Shanghai.jpg";
import Seewines from "../../Media/Seewines/Seewines.jpeg";

const projects = [
  { name: "ShowReel", img: Showreel },
  { name: "Seewines", img: Seewines },
  { name: "Shanghai", img: Shanghai },
];

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
};
export default Projects;

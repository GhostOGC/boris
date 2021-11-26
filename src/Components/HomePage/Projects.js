import Project from "./Project";
import Showreel from "../../Media/Showreel/Showreel.jpg";
import Shanghai from "../../Media/Shanghai4am/Shanghai.jpg";
import Seewines from "../../Media/Seewines/Seewines.jpeg";

const projects = [
  { title: "ShowReel", img: Showreel, link: "https://vimeo.com/487601703" },
  { title: "Seewines", img: Seewines, link: "https://vimeo.com/573358103" },
  { title: "Shanghai", img: Shanghai, link: "https://vimeo.com/449976062" },
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

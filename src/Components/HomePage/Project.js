import { Parallax } from "react-parallax";

const Project = ({ data }) => {
  return (
    <Parallax bgImage={data.img}>
      <div
        style={{
          left: "50%",
          top: "50%",
        }}
        className="project-wrapper"
      >
        <div>text inside</div>
      </div>
    </Parallax>
  );
};

export default Project;

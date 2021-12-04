import { Parallax } from "react-parallax";

const Project = ({ data }) => {
  return (
    <Parallax
      strength="200"
      style={{ width: "100%" }}
      bgImageStyle={{ height: "auto", width: "100%" }}
      bgImage={data.img}
    >
      <div className="project-wrapper">
        <div
          style={{
            fontSize: "6vw",
            textDecoration: "none",
            color: "white",
            position: "absolute",
            top: "43%",
            left: "46.5%",
          }}
        >
          <a style={{ textShadow: "0px 2px 10px black" }} href={data.link}>
            <i className="fas fa-play"></i>
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "5%",
        }}
      >
        <a
          style={{ textDecoration: "none", textShadow: "0px 2px 10px black" }}
          href={data.link}
        >
          <h1
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "5vw",
            }}
          >
            {data.title}
          </h1>
        </a>
      </div>
    </Parallax>
  );
};

export default Project;

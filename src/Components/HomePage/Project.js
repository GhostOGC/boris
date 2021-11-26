import { Parallax } from "react-parallax";

const Project = ({ data }) => {
  return (
    <Parallax
      strength="300"
      bgImageStyle={{ width: "100%" }}
      bgImage={data.img}
    >
      <div
        style={{
          left: "50%",
          top: "50%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
        className="project-wrapper"
      >
        <div
          style={{
            fontSize: "7vw",
            textDecoration: "none",
            width: "100%",
            color: "white",
          }}
        >
          <a style={{ textShadow: "0px 2px 10px black" }} href={data.link}>
            <i className="fas fa-play"></i>
          </a>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: "-1vw",
          left: "5vw",
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
              fontSize: "6vw",
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

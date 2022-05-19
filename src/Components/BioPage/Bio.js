import Img from "../../Media/Bio/Bio.jpeg";

const Bio = () => {
  return (
    <div className="bio-wrapper">
      <div className="bio-text">
        <p>
          Boris Kalaidjiev was born in Sofia and grew up in South Africa,
          Bulgaria, United States and France. He studied cinematography in
          France and attended the Global Cinematography Institute in Los
          Angeles. Invited to work in China he shot{" "}
          <a href="https://vimeo.com/449976062">Shanghai 4AM</a> and{" "}
          <a href="https://vimeo.com/449975773">Chongqing 4AM</a> , two films
          that collectively attracted more than 155 million views.
        </p>
        <p>
          As a director of photography, his goal is to help directors express
          their ideas through the visual medium of cinematography. To help them
          tell stories with moving pictures—using composition, light and shadow
          to evoke emotion and intensifying them with precise movement.
        </p>
        <p>
          An avid kite-surfer and ex-ski racer, Boris is always open to new
          challenges.
        </p>
        <p>He is fluent in English, Bulgarian and French.</p>
      </div>
      <div className="bio-image">
        <img alt="alternative" width="100%" src={Img} />
      </div>
    </div>
  );
};
export default Bio;

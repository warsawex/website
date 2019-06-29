import style from "./style.scss";
import Speaker from "./Speaker";
import speakers from "./speakers.json";

const PreviousSpeakers = () => (
  <div className={style.speakers}>
    <img
      src="./static/arrow_down.svg"
      alt="arrow down"
      className={style.arrow}
    />
    <h2>Previous Speakers</h2>
    <hr />
    <p>See other brave alchemists who shared their knowledge</p>
    {speakers.map((speaker, index) => (
      <Speaker key={index} name={speaker.name} avatar={speaker.avatar} />
    ))}
  </div>
);

export default PreviousSpeakers;

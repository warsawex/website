import style from "./style.scss";
import Speaker from "./Speaker";

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
    <Speaker name="Kamil Kowalski" avatar="/static/kamil_kowalski.jpg" />
    <Speaker name="Artur Sulej" avatar="/static/Artur_Sulej.png" />
  </div>
);

export default PreviousSpeakers;

import style from "./style.scss";
import Speaker from "./Speaker";

const PreviousSpeakers = () => (
  <div className={style.speakers}>
    <h2>Previous Speakers</h2>
    <hr />
    <p>See other brave alchemists who shared their knowledge</p>
    <Speaker name="Kamil Kowalski" avatar="/static/kkowalski.jpg" />
    <Speaker name="Artur Sulej" avatar="/static/Artur_Sulej.png" />
  </div>
);

export default PreviousSpeakers;

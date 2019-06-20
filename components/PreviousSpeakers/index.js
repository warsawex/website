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
    <Speaker name="Łukasz Łażewski" avatar="/static/łukasz_łażewski.jpeg" />
    <Speaker name="Jan Ziniewicz" avatar="/static/jan_ziniewicz.jpeg" />
    <Speaker
      name="Bartek Kruszczyński"
      avatar="/static/bartek_kruszczyński.jpg"
    />
    <Speaker name="Michał Muskała" avatar="/static/michał_muskała.jpeg" />
    <Speaker name="Kamil Pluta" avatar="/static/kamil_pluta.jpeg" />
    <Speaker name="Andriy Mykulyak" avatar="/static/andriy_mykulyak.jpeg" />
    <Speaker name="Hubert Łępicki" avatar="/static/hubert_łępicki.jpeg" />
    <Speaker name="Kamil Kowalski" avatar="/static/kamil_kowalski.jpg" />
    <Speaker name="Artur Sulej" avatar="/static/artur_sulej.jpeg" />
    <Speaker name="Piotr Rybarczyk" avatar="/static/piotr_rybarczyk.jpeg" />
  </div>
);

export default PreviousSpeakers;

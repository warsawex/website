import style from "./style.scss";

const Sponsors = () => (
  <div className={style.patrons}>
    <h1>Our Patrons</h1>
    <hr />
    <div className={style.logos}>
      <img src="/static/fresha.png" />
      <img src="/static/shedul.jpeg" />
    </div>
  </div>
);

export default Sponsors;

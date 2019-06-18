import style from "./style.scss";

const Founders = () => (
  <div className={style.founders}>
    <h1>Our Founders</h1>
    <hr />
    <div className={style.thesegoys}>
      <div className={style.founder}>
        <img src="/static/kamil_kowalski.png" alt="photo of Kamil Kowalski" />
        <h2>Kamil Kowalski</h2>
        <h3>Engineering Manager at Shedul</h3>
      </div>
      <div className={style.founder}>
        <img
          src="/static/kamil_kowalski.png"
          alt="photo of Robert Maciejewski"
        />
        <h2>Robert Maciejewski</h2>
        <h3>Ruby Developer at Visuality</h3>
      </div>
    </div>
  </div>
);

export default Founders;

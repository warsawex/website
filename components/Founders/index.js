import style from "./style.scss";

const Founders = () => (
  <div className={style.founders}>
    <h1>Our Founders</h1>
    <hr />
    <div className={style.thesegoys}>
      <div className={style.founder}>
        <div className={style.container}>
          <img src="/static/kamil_kowalski.jpg" alt="photo of Kamil Kowalski" />
        </div>
        <h2>Kamil Kowalski</h2>
        <h3>Engineering Manager at Fresha</h3>
      </div>
      <div className={style.founder}>
        <div className={style.container}>
          <img
            src="/static/robert_maciejewski.jpg"
            alt="photo of Robert Maciejewski"
          />
        </div>

        <h2>Robert Maciejewski</h2>
        <h3>Ruby Developer at Visuality</h3>
      </div>
    </div>
  </div>
);

export default Founders;

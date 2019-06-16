import style from "./style.scss";

const Speaker = props => (
  <div className={style.speaker}>
    <div
      className={style.image}
      style={{ backgroundImage: `url("${props.avatar}")` }}
    >
      <div className={style.overlay} />
    </div>
    <h2>{props.name}</h2>
  </div>
);

export default Speaker;

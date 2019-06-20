import style from "./style.scss";

const Speaker = props => (
  <div className={style.speaker}>
    <div className={style.container}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url("${props.avatar}")`,
          backgroundSize: `cover`,
          backgroundPositionX: `center`
        }}
      />
    </div>
    <h2>{props.name}</h2>
  </div>
);

export default Speaker;

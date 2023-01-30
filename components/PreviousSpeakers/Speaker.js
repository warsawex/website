import styles from "./PreviousSpeakers.module.scss";

const Speaker = (props) => (
  <div className={styles.speaker}>
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${props.avatar}")`,
          backgroundSize: `cover`,
          backgroundPositionX: `center`,
        }}
      />
    </div>
    <h2>{props.name}</h2>
  </div>
);

export default Speaker;

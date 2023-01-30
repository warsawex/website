import styles from "./Founders.module.scss";

const Founders = () => (
  <div className={styles.founders}>
    <h1>Our Founders</h1>
    <hr />
    <div className={styles.thesegoys}>
      <div className={styles.founder}>
        <div className={styles.container}>
          <img src="/kamil_kowalski.jpg" alt="photo of Kamil Kowalski" />
        </div>
        <h2>Kamil Kowalski</h2>
        <h3>Engineering Manager at Fresha</h3>
      </div>
      <div className={styles.founder}>
        <div className={styles.container}>
          <img
            src="/robert_maciejewski.jpg"
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

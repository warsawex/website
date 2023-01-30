import styles from "./Sponsors.module.scss";

const Sponsors = () => (
  <div className={styles.sponsors}>
    <h1>Our Sponsors</h1>
    <hr />
    <div className={styles.logos}>
      <a href="https://www.fresha.com/pl" target="_blank">
        <img src="/Fresha_Lockup_Horizontal_Prince_Curtain_Close_RGB.svg" />
      </a>
    </div>
  </div>
);

export default Sponsors;

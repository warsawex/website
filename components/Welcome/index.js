import styles from "./Welcome.module.scss";

const Welcome = () => (
  <div className={styles.welcome}>
    <div>
      <h1>
        We’re crazy about Elixir and functional programming, and we talk about
        it monthly.
      </h1>
      <button className={styles.desktopButton}>
        <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
          JOIN THE COMMUNITY
        </a>
      </button>
    </div>
    <button className={styles.mobileButton}>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default Welcome;

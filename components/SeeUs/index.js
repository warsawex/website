import styles from "./SeeUs.module.scss";

const SeeUs = () => (
  <div className={styles.seeUs}>
    See us on the next Meetup!
    <button className={styles.join}>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default SeeUs;

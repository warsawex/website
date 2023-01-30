import styles from "./Header.module.scss";
import Link from "next/link";

const InlineMenu = () => (
  <div className={styles.inlineMenu}>
    <div className={styles.menu}>
      <h2>
        <Link href="/speak-up">Speak Up</Link>
      </h2>
      <h2>
        <Link href="/about-us">About Us</Link>
      </h2>
    </div>
    <div className={styles.media}>
      <a href="https://www.facebook.com/warsawex.meetup/" target="_blank">
        <img src="/facebook_dark.svg" alt="dark Facebook logo" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCJtBwpt8UQQKQ0K0UNNcnJg"
        target="_blank"
      >
        <img src="/youtube_dark.svg" alt="dark Youtube logo" />
      </a>
      <a href="http://warsawex-slackin.herokuapp.com" target="_blank">
        <img src="/slack_dark.svg" alt="dark Slack logo" />
      </a>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        <img src="/meetup_dark.svg" alt="dark Meetup logo" />
      </a>
    </div>
  </div>
);

export default InlineMenu;

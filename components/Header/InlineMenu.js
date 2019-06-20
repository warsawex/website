import style from "./style.scss";
import Link from "next/link";

const InlineMenu = () => (
  <div className={style.inlineMenu}>
    <div className={style.menu}>
      <h2>
        <Link href="/speak-up">
          <a>Speak Up</a>
        </Link>
      </h2>
      <h2>
        <Link href="/about-us">
          <a>About Us</a>
        </Link>
      </h2>
    </div>
    <div className={style.media}>
      <a href="https://www.facebook.com/warsawex.meetup/" target="_blank">
        <img src="/static/facebook_dark.svg" alt="dark Facebook logo" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCJtBwpt8UQQKQ0K0UNNcnJg"
        target="_blank"
      >
        <img src="/static/youtube_dark.svg" alt="dark Youtube logo" />
      </a>
      <a href="http://warsawex-slackin.herokuapp.com" target="_blank">
        <img src="/static/slack_dark.svg" alt="dark Slack logo" />
      </a>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        <img src="/static/meetup_dark.svg" alt="dark Meetup logo" />
      </a>
    </div>
  </div>
);

export default InlineMenu;

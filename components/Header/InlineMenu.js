import style from "./style.scss";
import Link from "next/link";

const InlineMenu = () => (
  <div className={style.inlineMenu}>
    <div className={style.menu}>
      <Link href="/speak-up">
        <h2>
          <a>Speak Up</a>
        </h2>
      </Link>
      <Link href="/about-us">
        <h2>
          <a>About Us</a>
        </h2>
      </Link>
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

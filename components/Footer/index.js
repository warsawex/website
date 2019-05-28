import style from "./style.scss";
import Link from "next/link";

const Footer = () => (
  <div className={style.footer}>
    <div className={style.warsawex_logo}>
      <img className={style.symbol} src="/static/warsawex-symbol.svg" />
      <img
        className={style.logo}
        src="/static/warsawex-logo-white.svg"
        alt="warsaw.ex meetup logo white"
      />
    </div>
    <div className={style.media}>
      <a href="https://www.facebook.com/warsawex.meetup/" target="_blank">
        <img src="/static/facebook_white.svg" alt="white Facebook logo" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCJtBwpt8UQQKQ0K0UNNcnJg"
        target="_blank"
      >
        <img src="/static/youtube_white.svg" alt="white Youtube logo" />
      </a>
      <a href="http://warsawex-slackin.herokuapp.com" target="_blank">
        <img src="/static/slack_white.svg" alt="white Slack logo" />
      </a>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        <img src="/static/meetup_white.svg" alt="white Meetup logo" />
      </a>
    </div>
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
      <div className={style.contact}>
        <h2>Contact Us</h2>
        <h1>contact@warsawex.org</h1>
      </div>
    </div>
  </div>
);

export default Footer;

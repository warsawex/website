import Link from "next/link";

const Footer = () => (
  <div className="footer">
    <div className="warsawex_logo">
      <img className="symbol" src="/static/warsawex-symbol.svg" />
      <img
        className="logo"
        src="/static/warsawex-logo-white.svg"
        alt="warsaw.ex meetup logo white"
      />
    </div>
    <div className="media">
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
    <div className="menu">
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
      <div className="contact">
        <h2>Contact Us</h2>
        <h1>contact@warsawex.org</h1>
      </div>
    </div>
    <style jsx>
      {`
        .footer {
          background-color: #18263a;
          padding: 30px;
        }
        .warsawex_logo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .symbol {
          height: 102px;
          width: 73px;
        }
        .logo {
          height: 25px;
          width: 73px
          fill: white;
          margin-top: 22px;
        }
        .media {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 42px;
          margin-bottom: 32px;
        }
        .media img {
          margin: 0px 8px;
          height: 19px;
          width: auto;
        }
        .menu {
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          font-size: 15px;
          font-weight: 500;
          margin: 0px 0px 13px 0px;
        }
        .contact {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact > h2 {
          font-weight: 600;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .contact > h1 {
          font-size: 18px;
          font-weight: 500;
          margin-top: 0px;
        }
      `}
    </style>
  </div>
);

export default Footer;

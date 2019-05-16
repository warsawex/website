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
      <img src="/static/facebook_white.svg" alt="white Facebook logo" />
      <img src="/static/youtube_white.svg" alt="white Youtube logo" />
      <img src="/static/slack_white.svg" alt="white Slack logo" />
      <img src="/static/meetup_white.svg" alt="white Meetup logo" />
    </div>
    <div className="menu">
      <h2>Meetups</h2>
      <h2>Speak Up</h2>
      <h2>About Us</h2>
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
        .media > img {
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

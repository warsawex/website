import style from "./style.scss";

const Media = () => (
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
);

export default Media;

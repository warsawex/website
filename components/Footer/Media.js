import React from 'react';

import SocialMediaItem from './SocialMediaItem';

import style from './style.scss';

const Media = () => {
  return (
    <div className={style.media}>
      <SocialMediaItem
        link="https://www.facebook.com/warsawex.meetup/"
        img="/static/facebook_white.svg"
        alt="white Facebook logo"
      />

      <SocialMediaItem
        link="https://www.youtube.com/channel/UCJtBwpt8UQQKQ0K0UNNcnJg"
        img="/static/youtube_white.svg"
        alt="white Youtube logo"
      />
      <SocialMediaItem
        link="http://warsawex-slackin.herokuapp.com"
        img="/static/slack_white.svg"
        alt="white Slack logo"
      />
      <SocialMediaItem
        link="https://www.meetup.com/pl-PL/warsaw-ex/"
        img="/static/meetup_white.svg"
        alt="white Meetup logo"
      />
    </div>
  );
};

export default Media;

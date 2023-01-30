import React from "react";

import SocialMediaItem from "./SocialMediaItem";

import styles from "./Footer.module.scss";

const Media = () => {
  return (
    <div className={styles.media}>
      <SocialMediaItem
        link="https://www.facebook.com/warsawex.meetup/"
        img="/facebook_white.svg"
        alt="white Facebook logo"
      />

      <SocialMediaItem
        link="https://www.youtube.com/channel/UCJtBwpt8UQQKQ0K0UNNcnJg"
        img="/youtube_white.svg"
        alt="white Youtube logo"
      />
      <SocialMediaItem
        link="http://warsawex-slackin.herokuapp.com"
        img="/slack_white.svg"
        alt="white Slack logo"
      />
      <SocialMediaItem
        link="https://www.meetup.com/pl-PL/warsaw-ex/"
        img="/meetup_white.svg"
        alt="white Meetup logo"
      />
    </div>
  );
};

export default Media;

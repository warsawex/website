import React, { useState } from 'react';

export default function SocialMediaItem({ link, img, alt }) {
  const [hover, setHover] = useState(false);

  function hoverOn() {
    setHover(true);
  }

  function hoverOff() {
    setHover(false);
  }

  const opacity = {
    opacity: '0.6',
  };

  return (
    <a href={link} target="_blank">
      <img
        src={img}
        alt={alt}
        style={hover ? opacity : null}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      />
    </a>
  );
}

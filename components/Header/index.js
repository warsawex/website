import React from "react";
import Link from "next/link";
import Router from "next/router";
import style from "./style.scss";

import MenuToggle from "../MenuToggle";
import Menu from "../Menu";

const Logo = () => (
  <Link href="/">
    <a>
      <img src="/static/warsawex-logo.svg" alt="warsaw.ex logo" />
    </a>
  </Link>
);

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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    Router.events.on("routeChangeComplete", this.closeMenu);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeComplete", this.closeMenu);
  }

  componentDidUpdate() {
    document.body.classList.toggle("menuOpen", this.state.menuVisible);
  }

  toggleMenu() {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  }

  closeMenu() {
    this.setState({ menuVisible: false });
  }

  render() {
    return (
      <div className={style.header}>
        <div className={style.desktop}>
          <Logo />
          <InlineMenu />
        </div>
        <div className={style.mobile}>
          <MenuToggle onClick={this.toggleMenu} />
          {this.state.menuVisible && <Menu />}
        </div>
      </div>
    );
  }
}

export default Header;

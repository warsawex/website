import React from "react";
import Link from "next/link";
import Router from "next/router";
import style from "./style.scss";

import MenuToggle from "../MenuToggle";
import Menu from "../Menu";

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
        <Link href="/">
          <a>
            <img src="/static/warsawex-logo.svg" alt="warsaw.ex logo" />
          </a>
        </Link>
        <MenuToggle onClick={this.toggleMenu} />
        {this.state.menuVisible && <Menu />}
      </div>
    );
  }
}

export default Header;

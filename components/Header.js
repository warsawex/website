import React from "react";
import Link from "next/link";
import Router from "next/router";

import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    Router.events.on("routeChangeComplete", this.closeMenu);
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
      <div className="header">
        <Link href="/">
          <a>
            <img src="/static/warsawex-logo.svg" alt="warsaw.ex logo" />
          </a>
        </Link>
        <MenuToggle onClick={this.toggleMenu} />
        {this.state.menuVisible && <Menu />}
        <style jsx>
          {`
            .header {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              padding: 30px;
            }
            img {
              height: 23px;
              width: 128px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Header;

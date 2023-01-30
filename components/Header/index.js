import React from "react";
import Router from "next/router";
import styles from "./Header.module.scss";
import MenuToggle from "../MenuToggle";
import Menu from "../Menu";
import Logo from "./Logo";
import InlineMenu from "./InlineMenu";

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
    this.setState((state) => ({
      menuVisible: !state.menuVisible,
    }));
  }

  closeMenu() {
    this.setState({ menuVisible: false });
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.desktop}>
          <Logo />
          <InlineMenu />
        </div>
        <div className={styles.mobile}>
          <MenuToggle onClick={this.toggleMenu} />
          {this.state.menuVisible && <Menu />}
        </div>
      </div>
    );
  }
}

export default Header;

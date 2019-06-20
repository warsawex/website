import style from "./style.scss";
import Contact from "./Contact";
import Logo from "./Logo";
import Menu from "./Menu";
import Media from "./Media";

const Footer = () => (
  <div className={style.footer}>
    <div className={style.mobile}>
      <Logo />
      <Media />
      <Menu />
      <Contact />
    </div>
    <div className={style.desktop}>
      <div className={style.leftColumn}>
        <Contact />
      </div>
      <Logo />
      <div className={style.rightColumn}>
        <Menu />
        <Media />
      </div>
    </div>
  </div>
);

export default Footer;

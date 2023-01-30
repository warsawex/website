import styles from "./Footer.module.scss";
import Contact from "./Contact";
import Logo from "./Logo";
import Menu from "./Menu";
import Media from "./Media";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.mobile}>
      <Logo />
      <Media />
      <Menu />
      <Contact />
    </div>
    <div className={styles.desktop}>
      <div className={styles.leftColumn}>
        <Contact />
      </div>
      <Logo />
      <div className={styles.rightColumn}>
        <Menu />
        <Media />
      </div>
    </div>
  </div>
);

export default Footer;

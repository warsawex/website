import styles from "./Footer.module.scss";

const Logo = () => (
  <div className={styles.warsawex_logo}>
    <img className={styles.symbol} src="/warsawex-symbol.svg" />
    <img
      className={styles.logo}
      src="/warsawex-logo-white.svg"
      alt="warsaw.ex meetup logo white"
    />
  </div>
);

export default Logo;

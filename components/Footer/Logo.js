import style from "./style.scss";

const Logo = () => (
  <div className={style.warsawex_logo}>
    <img className={style.symbol} src="/static/warsawex-symbol.svg" />
    <img
      className={style.logo}
      src="/static/warsawex-logo-white.svg"
      alt="warsaw.ex meetup logo white"
    />
  </div>
);

export default Logo;

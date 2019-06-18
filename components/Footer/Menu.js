import style from "./style.scss";
import Link from "next/link";

const Menu = () => (
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
);

export default Menu;

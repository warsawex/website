import style from "./style.scss";
import Link from "next/link";

const Menu = () => (
  <div className={style.menu}>
    <h2>
      <Link href="/speak-up">
        <a>Speak Up</a>
      </Link>
    </h2>
    <h2>
      <Link href="/about-us">
        <a>About Us</a>
      </Link>
    </h2>
  </div>
);

export default Menu;

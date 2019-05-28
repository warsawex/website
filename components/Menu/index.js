import Link from "next/link";
import style from "./style.scss";

const Menu = () => (
  <div className={style.menu}>
    <hr />
    <h1>
      <Link href="/speak-up">
        <a>Speak Up</a>
      </Link>
    </h1>
    <h1>
      <Link href="/about-us">
        <a>About Us</a>
      </Link>
    </h1>
    <button>JOIN THE COMMUNITY</button>
  </div>
);

export default Menu;

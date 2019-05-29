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
    <button>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default Menu;

import Link from "next/link";
import styles from "./Menu.module.scss";

const Menu = () => (
  <div className={styles.menu}>
    <hr />
    <h1>
      <Link href="/speak-up"> Speak Up</Link>
    </h1>
    <h1>
      <Link href="/about-us"> About Us</Link>
    </h1>
    <button>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default Menu;

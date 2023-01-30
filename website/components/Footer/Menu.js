import React from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h2>
        <Link href="/speak-up">Speak Up</Link>
      </h2>
      <h2>
        <Link href="/about-us">About Us</Link>
      </h2>
    </div>
  );
};

export default Menu;

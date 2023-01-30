import styles from "./MenuToggle.module.scss";

const MenuToggle = (props) => (
  <div className={styles.menu} onClick={props.onClick}>
    <div />
    <div />
    <div />
  </div>
);

export default MenuToggle;

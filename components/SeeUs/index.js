import style from "./style.scss";

const SeeUs = () => (
  <div className={style.see_us}>
    See us on the next Meetup!
    <button className={style.join}>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default SeeUs;

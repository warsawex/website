import style from "./style.scss";
import Link from "next/link";

const Meetup = () => (
  <div className={style.next}>
    <img
      src="./static/arrow_down.svg"
      alt="arrow down"
      className={style.arrow}
    />
    <div className={style.details}>
      <div className={style.num}>
        <div>#</div>
        <div>5</div>
      </div>
      <h2>Meetup</h2>
      <div className={style.date}>May 28, 7:00 PM</div>
      <div className={style.location}>
        <img src="/static/location.svg" alt="location pin" />
        <p>Znajomi Znajomych - Warsaw</p>
      </div>
    </div>
    <div className={style.agenda}>
      <h1>Agenda</h1>
      <hr />
      <div className={style.talks}>
        <h2>First topic</h2>
        <h3>Speaker:</h3>
        <h3>Language:</h3>
        <p>
          Topic's description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam congue placerat turpis ac vestibulum. Duis at dui sit amet
          odio porta porta. Nam vitae vestibulum eros, fringilla sodales ipsum.
          Nulla a tortor ac lorem tincidunt aliquet ac vel urna.
        </p>
        <div className={style.level}>
          <h3>Level:</h3>
          <img src="/static/phial_full.svg" alt="full phial" />
          <img src="/static/phial_full.svg" alt="full phial" />
          <img src="/static/phial_empty.svg" alt="empty phial" />
        </div>
      </div>
      <button className={style.signButton}>
        <Link href="/speak-up">
          <a>Sign me up</a>
        </Link>
      </button>
    </div>
  </div>
);

export default Meetup;

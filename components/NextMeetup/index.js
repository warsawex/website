import style from "./style.scss";
import Link from "next/link";

const Meetup = () => (
  <div className={style.next}>
    <div className={style.arrow}>
      <img src="./static/arrow_down.svg" alt="arrow down" />
    </div>
    <div className={style.container}>
      <div className={style.details}>
        <div className={style.num}>
          <div>#</div>
          <div>6</div>
        </div>
        <h2>Meetup</h2>
        <div className={style.date}>June 24, 7:00 PM</div>
        <div className={style.location}>
          <img src="/static/location.svg" alt="location pin" />
          <p>Znajomi Znajomych - Warsaw</p>
        </div>
      </div>
      <div className={style.agenda}>
        <h1>Agenda</h1>
        <hr />
        <div className={style.talks}>
          <h2>Building observable Elixir services [EN]</h2>
          <h3>Speaker: Paweł Szafran</h3>
          <h3>Language: English</h3>
          <p>
            When you run Elixir services at scale, how can you tell how well
            they are performing? Let's explore practical tips to increase the
            observability of Elixir services, with some live examples.
          </p>
          <div className={style.level}>
            <h3>Level:</h3>
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_empty.svg" alt="empty phial" />
            <img src="/static/phial_empty.svg" alt="empty phial" />
          </div>
          <h2>Beware of dragons! The charms of remote work [PL]</h2>
          <h3>Speaker: Jan Ziniewicz & Łukasz Łażewski</h3>
          <h3>Language: Polish</h3>
          <p>
            Jan and Łukasz will discuss working remotely from an employee and
            employers perspective. What are the common pitfalls and how to avoid
            them. What rules do they recommend to introduce to make this kind of
            workflow work.
          </p>
          <div className={style.level}>
            <h3>Level:</h3>
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_full.svg" alt="full phial" />
            <img src="/static/phial_empty.svg" alt="empty phial" />
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
  </div>
);

export default Meetup;

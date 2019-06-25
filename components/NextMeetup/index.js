import style from "./style.scss";
import Link from "next/link";
import meetup from "./meetup.json";

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};
const date = new Date(meetup.date);
var dateString = new Intl.DateTimeFormat("en-GB", options).format(date);

const Meetup = () => (
  <div className={style.next}>
    <div className={style.arrow}>
      <img src="./static/arrow_down.svg" alt="arrow down" />
    </div>
    <div className={style.container}>
      <div className={style.details}>
        <div className={style.num}>
          <div>#</div>
          <div>{meetup.number}</div>
        </div>
        <h2>Meetup</h2>
        <div className={style.date}>{dateString}</div>
        <div className={style.location}>
          <img src="/static/location.svg" alt="location pin" />
          <p>{meetup.place}</p>
        </div>
      </div>
      <div className={style.agenda}>
        <h1>Agenda</h1>
        <hr />
        {meetup.talks.map((talk, index) => (
          <div key={index} className={style.talk}>
            <h2>{talk.title}</h2>
            <h3>Speaker: {talk.speaker}</h3>
            <h3>Language: {talk.language}</h3>
            <p>{talk.description}</p>
            <div className={style.level}>
              <h3>Level:</h3>
              {[...Array(talk.level).keys()].map(index => (
                <img
                  key={index}
                  src="/static/phial_full.svg"
                  alt="full phial"
                />
              ))}
              {[...Array(5 - talk.level).keys()].map(index => (
                <img
                  key={index}
                  src="/static/phial_empty.svg"
                  alt="empty phial"
                />
              ))}
            </div>
          </div>
        ))}
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

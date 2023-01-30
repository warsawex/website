import styles from "./NextMeetUp.module.scss";
import Link from "next/link";
import meetup from "./meetup.json";

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};
const date = new Date(meetup.date);
var dateString = new Intl.DateTimeFormat("en-GB", options).format(date);

const Meetup = () => (
  <div className={styles.next}>
    <div className={styles.arrow}>
      <img src="./arrow_down.svg" alt="arrow down" />
    </div>
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.num}>
          <div>#</div>
          <div>{meetup.number}</div>
        </div>
        <h2>Meetup</h2>
        <div className={styles.date}>{dateString}</div>
        <div className={styles.location}>
          <img src="/location.svg" alt="location pin" />
          <p>
            <a href={meetup.place.link} target="_blank">
              {meetup.place.name}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Agenda</h1>
        <hr />
        {meetup.talks.map((talk, index) => (
          <div key={index} className={styles.talk}>
            <h2>👉{talk.title}</h2>
            <h3>Speaker: {talk.speaker}</h3>
            <h3>Language: {talk.language}</h3>
            <p>{talk.description}</p>
            <div className={styles.level}>
              <h3>Level:</h3>
              {[...Array(talk.level).keys()].map((index) => (
                <img key={index} src="/phial_full.svg" alt="full phial" />
              ))}
              {[...Array(5 - talk.level).keys()].map((index) => (
                <img key={index} src="/phial_empty.svg" alt="empty phial" />
              ))}
            </div>
          </div>
        ))}
        <div className={styles.talk}>
          <h2>👉Lightning Talks / Bring Your Own Problem</h2>
        </div>
        <button className={styles.signButton}>
          <Link href="/speak-up">Sign me up</Link>
        </button>
      </div>
    </div>
  </div>
);

export default Meetup;

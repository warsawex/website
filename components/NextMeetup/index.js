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

const Meetup = () => {
  const displayLevel = (level) => {
    const fialsFull = [...Array(level).keys()].map((index) => (
      <img key={index} src="/phial_full.svg" alt="full phial" />
    ));
    const fialsEmpty = [...Array(5 - level).keys()].map((index) => (
      <img key={index} src="/phial_empty.svg" alt="empty phial" />
    ));

    return (
      level !== 0 && (
        <div className={styles.level}>
          <h3>Level:</h3>
          {fialsFull}
          {fialsEmpty}
        </div>
      )
    );
  };

  return (
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
          <div className={styles.specialGuest}>
            <h2>✨ Special guest: {meetup.specialGuest} ✨</h2>
          </div>
          {meetup.talks.map((talk, index) => {
            const { title, speaker, github, description, level } = talk;
            return (
              <div key={index} className={styles.talk}>
                <h2>👉 {title}</h2>
                <h3>
                  Speaker:&nbsp;
                  <a
                    href={github}
                    target="_blank"
                    className={styles.githubLink}
                  >
                    {speaker}
                  </a>
                </h3>
                <p>{description}</p>
                {displayLevel(level)}
              </div>
            );
          })}
          <div className={styles.talk}>
            <h2>👉 Lightning Talks / Bring Your Own Problem</h2>
          </div>
          <button className={styles.signButton}>
            <Link href="/speak-up">Sign me up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meetup;

import styles from "./NextStudio.module.scss";
import Link from "next/link";
import studio from "./studio.json";

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
};
const date = new Date(studio.date);
var dateString = new Intl.DateTimeFormat("en-GB", options).format(date);

const Studio = () => (
  <div className={styles.next}>
    <div className={styles.arrow}>
      <img src="./arrow_down.svg" alt="arrow down" />
    </div>
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.num}>
          <div>#</div>
          <div>{studio.number}</div>
        </div>
        <h2>Studio</h2>
        <div className={styles.date}>{dateString}</div>
        <div className={styles.location}>
          <h3>Tune in at:</h3>
          <a href={studio.youtube.link} target="_blank">
            {studio.youtube.link}
          </a>
        </div>
      </div>
      <div className={styles.agenda}>
        <h1>Guests</h1>
        <hr />
        <p>
          <span>Joseph Yiasemides</span> - Software Team Lead at Port Zero.
        </p>
        <p>
          Joseph used to work as a software engineer in Erlang Solutions, and
          his current gig focuses on software security - he has some great
          experience to share with us.
        </p>
        <h1>Topics</h1>
        <hr />
        {studio.topics.map((topic, index) => (
          <div key={index} className={styles.topic}>
            <h2>👉 {topic}</h2>
          </div>
        ))}
        <button className={styles.signButton}>
          <Link href="/speak-up">Sign me up</Link>
        </button>
      </div>
    </div>
  </div>
);

export default Studio;

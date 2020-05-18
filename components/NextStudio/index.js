import style from "./style.scss";
import Link from "next/link";
import studio from "./studio.json";

var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};
const date = new Date(studio.date);
var dateString = new Intl.DateTimeFormat("en-GB", options).format(date);

const Studio = () => (
    <div className={style.next}>
        <div className={style.arrow}>
            <img src="./static/arrow_down.svg" alt="arrow down" />
        </div>
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.num}>
                    <div>#</div>
                    <div>{studio.number}</div>
                </div>
                <h2>Studio</h2>
                <div className={style.date}>{dateString}</div>
                <div className={style.location}>
                    <h3>Tune at:</h3>
                    <a href={studio.youtube.link} target="_blank">
                        https://youtu.be/NZn_wnEpoFc
                        </a>
                </div>
            </div>
            <div className={style.agenda}>
                <h1>Guests</h1>
                <hr />
                <p><span>Joseph Yiasemides</span> - Software Team Lead at Port Zero.</p>
                <p>Joseph used to work as a software engineer in Erlang Solutions, and his current gig focuses on software security - he has some great experience to share with us.</p>
                <h1>Topics</h1>
                <hr />
                {studio.topics.map((topic, index) => (
                    <div key={index} className={style.topic}>
                        <h2>👉 {topic}</h2>
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

export default Studio;

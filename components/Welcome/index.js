import style from "./style.scss";

const Welcome = () => (
  <div className={style.welcome}>
    <div>
      <h1>
        We’re crazy about Elixir and functional programming, and we talk about
        it monthly.
      </h1>
    </div>
    <button>
      <a href="https://www.meetup.com/pl-PL/warsaw-ex/" target="_blank">
        JOIN THE COMMUNITY
      </a>
    </button>
  </div>
);

export default Welcome;

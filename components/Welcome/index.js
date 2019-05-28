import style from "./style.scss";

const Welcome = () => (
  <div className={style.welcome}>
    <div>
      <h1>
        We’re crazy about Elixir and functional programming, and we talk about
        it monthly.
      </h1>
    </div>
    <button>JOIN THE COMMUNITY</button>
  </div>
);

export default Welcome;

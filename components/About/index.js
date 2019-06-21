import style from "./style.scss";

const About = () => (
  <div className={style.about}>
    <div className={style.banner}>
      <div className={style.headers}>
        <h1>About Us</h1>
        <p className={style.emphasis}>
          Meet warsaw.ex founders and discover our story
        </p>
        <p>Our story begins in November 2018…</p>
      </div>
      <img src="/static/logo_about_us.svg" alt="big warsaw.ex logo" />
    </div>
    <img
      src="./static/arrow_down.svg"
      alt="arrow down"
      className={style.arrow}
    />
    <div className={style.story}>
      <h2>Our Story</h2>
      <hr />
      <p>
        We created warsaw.ex to bring together Alchemists and provide a place
        for the community to grow and learn. Our mission is to share knowledge
        and help anyone interested in using Elixir.
      </p>
      <p>
        During each of our meetups, we introduce new speakers who explain the
        traits and recipes for Elixir programming. We’re a non-profit community
        of programmers and our events are free of charge.
      </p>
      <p>
        Thanks to the sponsors that support us we can host meetups each month.
      </p>
      <p>Join us, there’s loads to discover, and we have beer 😉</p>
    </div>
  </div>
);

export default About;

import css from "./About.scss";

const About = () => (
  <div className={css.about}>
    <h1>About Us</h1>
    <p className={css.emphasis}>Meet Warsaw.ex founders Discover our story</p>
    <p>Our story begins in November 2018…</p>
    <img src="/static/logo_about_us.svg" alt="big warsaw.ex logo" />
    <h2>Our Story</h2>
    <hr />
    <p>
      We created warsaw.ex to bring together Alchemists and provide a place for
      the community to grow and learn. Our mission is to share knowledge and
      help anyone interested in using Elixir.
    </p>
    <p>
      During each of our meetups, we introduce new speakers who explain the
      traits and recipes for Elixir programming. We’re a non-profit community of
      programmers and our events are free of charge.
    </p>
    <p>
      Thanks to the sponsors that support us we can host meetups each month.
    </p>
    <p>Join us, there’s loads to discover, and we have beer 😉</p>
  </div>
);

export default About;

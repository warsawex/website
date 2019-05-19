const About = () => (
  <div className="about">
    <h1>About Us</h1>
    <h2>Meet Warsaw.ex founders Discover our story</h2>
    <p>Our story begins in November 2018…</p>
    <img src="/static/logo_about_us.svg" alt="big warsaw.ex logo" />
    <h1 id="story">Our Story</h1>
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
    <style>
      {`
        .about {
          z-index: 1;
          padding: 30px;
          text-align: center;
        }
        .about > h1 {
          font-size: 50px;
          font-weight: 700;
          color: #813d8f;
        }
        .about > h2 {
          font-size: 24px;
          font-weight: 200;
          color: #132233;
        }
        .about > p {
          font-size: 16px;
          color: #000000;
        }
        .about > img {
          height: 400px;
          width: auto;
          margin-bottom: 120px;
        }
        .about > p {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #000000;
          margin-bottom: 25px;
        }
        #story {
          font-size: 33px;
          font-weight: 300;
          color: #813D8F;
          margin: 15px auto;
        }
      `}
    </style>
  </div>
);

export default About;

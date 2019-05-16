import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const AboutUs = () => (
  <Layout>
    <Header />
    <div className="about">
      <h1>About Us</h1>
      <h2>Meet Warsaw.ex founders Discover our story</h2>
      <p>Our story begins in November 2018…</p>
      <img src="/static/logo_about_us.svg" />
      <h1 id="story">Our Story</h1>
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
      <p>Join us, there’s loads to discover, and we have beer ;`/)`</p>
      <div className="founders">
        <h1 id="founders">Our Founders</h1>
        <hr />
        <img src="/static/kamil_kowalski.png" />
        <h2>Kamil Kowalski</h2>
        <h3>Engineering Manager at Shedul</h3>
        <img src="/static/kamil_kowalski.png" />
        <h2>Robert Maciejewski</h2>
        <h3>Ruby Developer at Visuality</h3>
      </div>
      <div id="see_us">
        See us on the next Meetup
        <button id="join">JOIN THE COMMUNITY</button>
      </div>
      <style>
        {`
        .about {
            z-index: 1;
            padding: 30px;
            text-align: center;
        }
        .about > h1 {
            // text-align: center;
            font-size: 50px;
            font-weight: 700;
            color: #813d8f;
        }
        .about > h2 {
            // text-align: center;
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
        #story, #founders {
            font-size: 33px;
            font-weight: 300;
            color: #813D8F;
            margin: 15px auto;
         }
         hr {
            border-style: solid;
            border-width: 0.5px;
            border-color: #813d8f;
            margin-top: 15px;
            margin-bottom: 30px;
         }
         .founders > img {
            height: 174px;
            width: 174px;
         }
         .founders > h2 {
            font-size: 20px;
            font-weight: 700;
            color: #707070;
            margin-bottom: 10px;
         }
         .founders > h3 {
            font-size: 20px;
            font-weight: 300;
            color: #707070;
            margin: 0px 0px 50px 0px;
         }
         #see_us {
            font-size: 30px;
            font-weight: 200;
            color: #132233;
            margin: 40px 0px;
         }
         #join {
            background-image: linear-gradient(#4c4092, #8c3c8f);
            color: white;
            font-weight: 700;
            border: none;
            border-radius: 3px;
            width: 306px;
            height: 54px;
            font-size: 20px;
            font-weight: 700;
            display: block;
            margin-top: 40px;
            margin-bottom: 80px;
            margin-left: auto;
            margin-right: auto;
         }
      `}
      </style>
    </div>
    <Footer />
  </Layout>
);

export default AboutUs;

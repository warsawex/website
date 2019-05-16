import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PreviousSpeakers from "../components/PreviousSpeakers";

const SpeakUp = () => (
  <Layout>
    <Header />
    <div>
      <div className="speakUp">
        <h1>Speak Up</h1>
        <h2>Become our next speaker</h2>
        <div className="box">Name</div>
        <div className="box">Email</div>
        <div className="box">Why would you like to speak?</div>
        <div className="box">Your topic</div>
        <div className="topic">
          <div id="slide">
            <div id="dot" />
          </div>
          <span>I don't have a topic yet</span>
        </div>
        <button id="submit">Submit</button>
        <PreviousSpeakers />
      </div>
      <style>
        {`
    .speakUp {
        z-index: 1;
        padding: 30px;
    }
    .speakUp > h1 {
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        color: #813D8F;
    }
    .speakUp > h2 {
        text-align: center;
        font-size: 24px;
        font-weight: 200;
        color: #132233;
    }
    .box {
        border: solid 1px #813E8F;
        border-radius: 5px 5px 5px 5px;
        font-size: 18px;
        font-weight: 400;
        color: #132233;
        opacity: 0.44;
        margin-bottom: 25px;
        padding: 15px;
    }
    .topic {
        display: inline-flex;
        align-items: center;
    }
    #slide {
        background-image: linear-gradient(#4c4092, #8c3c8f);
        display: block;
        border: none;
        border-radius: 23px;
        height: 30px;
        width: 70px;
        padding: 4px;
        margin: 10px;
    }
    #dot {
        background-color: white;
        height: 29px;
        width: 29px;
        border: none;
        border-radius: 45px; 
    }
    span {
        display: inline;
        font-size: 18px;
        font-weight: 400;
        color: #132233;
        opacity: 0.44;
    }
    #submit {
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
        margin-top: 120px;
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
      }
    `}
      </style>
    </div>
    <Footer />
  </Layout>
);

export default SpeakUp;

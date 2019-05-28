import style from "./style.scss";

const SpeakUpForm = () => (
  <div className={style.speakUp}>
    <h1>Speak Up</h1>
    <h2>Become our next speaker</h2>
    <div className={style.box}>Name</div>
    <div className={style.box}>Email</div>
    <div className={style.box}>Why would you like to speak?</div>
    <div className={style.box}>Your topic</div>
    <div className={style.topic}>
      <div className={style.slide}>
        <div className={style.dot} />
      </div>
      <span>I don't have a topic yet</span>
    </div>
    <button className={style.submit}>Submit</button>
  </div>
);

export default SpeakUpForm;

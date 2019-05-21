import Speaker from "./Speaker";

const PreviousSpeakers = () => (
  <div className="speakers">
    <h1>Previous Speakers</h1>
    <hr />
    <p>See other brave alchemists who shared their knowledge</p>
    <Speaker name="Kamil Kowalski" avatar="/static/kkowalski.jpg" />
    <Speaker name="Artur Sulej" avatar="/static/Artur_Sulej.png" />
    <style jsx>
      {`
        .speakers {
          text-align: center;
          padding: 30px;
        }
        .speakers > h1 {
          font-size: 33px;
          font-weight: 300;
          color: #813d8f;
          margin: 15px auto;
        }
        hr {
          border-style: solid;
          border-width: 0.5px;
          border-color: #813d8f;
          margin-top: 15px;
          margin-bottom: 30px;
        }
        .speakers > p {
          font-size: 25px;
          font-weight: 200;
          color: #132233;
        }
      `}
    </style>
  </div>
);

export default PreviousSpeakers;

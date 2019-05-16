const PreviousSpeakers = () => (
  <div className="speakers">
    <h1>Previous Speakers</h1>
    <hr />
    <p>See other brave alchemists who shared their knowledge</p>
    <div className="speaker">
      <div className="image">
        <div className="overlay" />
      </div>
      <h2>Speaker's name</h2>
    </div>
    <style>
      {`
         .speakers {
            text-align: center;
         }
         .speakers > h1 {
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
         .speakers > p {
            font-size: 25px;
            font-weight: 200;
            color: #132233
         }
         .speaker > h2 {
            font-size: 20px;
            font-weight: 700;
            color: #707070;
         }
         .speaker {
            display: flex;
            flex-direction: column;
            align-items: center;
         }
         .image {
            background: url("/static/kkowalski.jpg");
            background-size: cover;
            height: 174px;
            width: 174px;
            border-radius: 90px 90px 90px 90px;
         }
         .overlay {
            width: 174px;
            height: 174px;
            border-radius: 90px 90px 90px 90px;
            background: #813D8F;
            position: absolute;
            opacity: 0.44;
         }
            `}
    </style>
  </div>
);

export default PreviousSpeakers;

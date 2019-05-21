const Founders = () => (
  <div className="founders">
    <h1>Our Founders</h1>
    <hr />
    <img src="/static/kamil_kowalski.png" alt="photo of Kamil Kowalski" />
    <h2>Kamil Kowalski</h2>
    <h3>Engineering Manager at Shedul</h3>
    <img src="/static/kamil_kowalski.png" alt="photo of Robert Maciejewski" />
    <h2>Robert Maciejewski</h2>
    <h3>Ruby Developer at Visuality</h3>
    <style jsx>
      {`
        .founders {
          padding: 30px;
          text-align: center;
        }
        .founders > h1 {
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
      `}
    </style>
  </div>
);

export default Founders;

const Meetup = () => (
  <div className="next-meetup">
    <div className="meetup-num">
      <div id="cross">#</div>
      <div id="num">5</div>
    </div>
    <h2>Meetup</h2>
    <div className="date">May 28, 7:00 PM</div>
    <div className="location">
      <img src="/static/location.svg" alt="location pin" />
      <p>Znajomi Znajomych - Warsaw</p>
    </div>
    <div className="agenda">
      <h1>Agenda</h1>
      <hr />
      <div className="talks">
        <h2>First topic</h2>
        <h3>Speaker:</h3>
        <h3>Language:</h3>
        <p>
          Topic's description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam congue placerat turpis ac vestibulum. Duis at dui sit amet
          odio porta porta. Nam vitae vestibulum eros, fringilla sodales ipsum.
          Nulla a tortor ac lorem tincidunt aliquet ac vel urna.
        </p>
        <div className="level">
          <h3 id="level">Level:</h3>
          <img src="/static/phial_full.svg" />
          <img src="/static/phial_full.svg" />
          <img src="/static/phial_empty.svg" />
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .next-meetup {
          text-align: center;
          padding: 30px;
        }
        .meetup-num {
          display: inline-flex;
          flex-wrap: nowrap;
          padding: 0px;
          margin: 0px;
          line-height: 140px;
        }
        .meetup-num,
        h2 {
          color: #813d8f;
          opacity: 0.84;
        }
        #num {
          font-size: 180px;
          font-weight: 900;
          margin: 0px;
        }
        #cross {
          font-size: 125px;
          font-weight: 700;
          margin-right: 18px;
          //   padding: 30px 0px;
        }
        h2 {
          font-size: 54px;
          font-weight: 600;
          margin-top: 0px;
        }
        .date {
          font-size: 27px;
          font-weight: 600;
          color: #132233;
          margin-top: 28px;
        }
        .location {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
        }
        .location > p {
          color: #707070;
          font-size: 18px;
          font-weight: 500;
          margin-left: 15px;
        }
        .agenda > h1 {
          font-size: 40px;
          font-weight: 300;
          color: #132233;
          margin-bottom: 0px;
        }
        hr {
          border-style: solid;
          border-width: 0.5px;
          border-color: #813d8f;
          margin-top: 20px;
          margin-bottom: 35px;
        }
        .talks > h2 {
          font-size: 18px;
          font-weight: 700;
          color: #132233;
          opacity: 1;
          margin-bottom: 25px;
        }
        .talks > h3,
        p {
          color: #707070;
        }
        .talks > h3 {
          font-size: 16px;
          margin-top: 0px;
          margin-bottom: 10px;
        }
        .talks > h2,
        p {
          font-size: 18px;
        }
        .talks p {
          color: #000000;
          margin: 30px 27px 0px 27px;
        }
        .level {
          display: inline-flex;
          margin-top: 15px;
        }
        .level > h3 {
          color: #132233;
          font-size: 16px;
          margin-right: 10px;
        }
        .level > img {
          margin: 10px 3px 70px 0px;
        }
      `}
    </style>
  </div>
);

export default Meetup;

const SeeUs = () => (
  <div id="see_us">
    See us on the next Meetup!
    <button id="join">JOIN THE COMMUNITY</button>
    <style jsx>
      {`
        #see_us {
          padding: 30px;
          text-align: center;
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
);

export default SeeUs;

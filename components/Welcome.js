const Welcome = () => (
  <div className="welcome">
    <div>
      <h1>
        We’re crazy about Elixir and functional programming, and we talk about
        it monthly.
      </h1>
    </div>
    <button>JOIN THE COMMUNITY</button>
    <style jsx>
      {`
        .welcome {
          background-image: url("/static/warsawexlogo_half.svg"),
            linear-gradient(#4f4092, #6e3e90ee, #813d8f00);
          background-position: right 15px, 0% 0%;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 30px 30px 100px 30px;
          min-height: 700px;
        }
        h1 {
          font-size: 30px;
          font-weight: lighter;
          color: #ffffff;
          margin: 40px 0;
          width: calc(100% - 100px);
        }
        button {
          background-color: white;
          color: #132233;
          border: none;
          border-radius: 3px;
          width: 306px;
          height: 54px;
          font-size: 14px;
          font-weight: 700;
          margin: 50px 0;
        }
      `}
    </style>
  </div>
);

export default Welcome;

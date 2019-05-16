import Link from "next/link";

const Menu = () => (
  <div className="menu">
    <hr />
    <h1>
      <Link href="/speak-up">
        <a>Speak Up</a>
      </Link>
    </h1>
    <h1>
      <Link href="/about-us">
        <a>About Us</a>
      </Link>
    </h1>
    <button>JOIN THE COMMUNITY</button>
    <style jsx>
      {`
        .menu {
          //   display: none;
          position: absolute;
          top: 80px;
          background-color: white;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          padding: 0px 30px;
        }
        hr {
          border: 0.5px solid;
          color: #813d8f;
          margin: 0px;
          padding: 0px;
          margin-bottom: 30px;
        }
        h1 {
          padding: 30px 0px;
          margin: 0px;
          font-size: 25px;
          font-weight: 700;
          color: #132233;
        }
        button {
          background-image: linear-gradient(#4c4092, #8c3c8f);
          color: white;
          font-weight: 700;
          border: none;
          border-radius: 3px;
          width: 100%;
          height: 54px;
          font-size: 14px;
          font-weight: bold;
          display: block;
          margin: 100px auto;
        }
      `}
    </style>
    <style jsx global>
      {`
        body {
          overflow-y: hidden;
        }
      `}
    </style>
  </div>
);

export default Menu;

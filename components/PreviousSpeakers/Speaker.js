import style from "./style.scss";

const Speaker = props => (
  <div className={style.speaker}>
    <div
      className={style.image}
      style={{ backgroundImage: `url("${props.avatar}")` }}
    >
      <div className={style.overlay} />
    </div>
    <h2>{props.name}</h2>
    {/* <style jsx>
      {`
        .speaker > h2 {
          font-size: 20px;
          font-weight: 700;
          color: #707070;
        }
        .speaker {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }
        .image {
          background-size: cover;
          height: 174px;
          width: 174px;
          border-radius: 90px 90px 90px 90px;
        }
        .overlay {
          width: 174px;
          height: 174px;
          border-radius: 90px 90px 90px 90px;
          background: #813d8f;
          position: absolute;
          opacity: 0.44;
        }
      `}
    </style> */}
  </div>
);

export default Speaker;

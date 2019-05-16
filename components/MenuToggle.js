const MenuToggle = props => (
  <div className="menu" onClick={props.onClick}>
    <div />
    <div />
    <div />
    <style jsx>
      {`
        .menu > div {
          width: 40px;
          height: 3px;
          background-color: #132233;
          margin-bottom: 5px;
        }
      `}
    </style>
  </div>
);

export default MenuToggle;

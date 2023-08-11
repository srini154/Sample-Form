import React from "react";
import "./Modal.css";
function modal({ setopenModal, data, setList }) {
  return (
    <div className="modalback">
      <div className="modalcontainer">
        <div className="titleclose">
          <button
            onClick={() => {
              setopenModal(false);
              setList([]);
            }}
          >
            X
          </button>
        </div>
        <div className="title"></div>
        <div className="body">
          <div className="list1">
            {data.map((a, index) => (
              <ul key={index}>
                <li>
                  {" "}
                  <span className="color1">Name: </span>
                  <span className="color2">{a.Name} </span>
                </li>
                <li>
                  <span className="color1">Username:</span>{" "}
                  <span className="color2">{a.Username} </span>
                </li>
                <li>
                  <span className="color1">password: </span>
                  <span className="color2">{a.Password} </span>
                </li>
                <li>
                  <span className="color1">Confirm Password: </span>
                  <span className="color2">{a.Cpassword} </span>
                </li>
                <li>
                  <span className="color1">DOB: </span>
                  <span className="color2">{a.DOB} </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <button
          className="Cancel"
          onClick={() => {
            setopenModal(false);
            setList([]);
          }}
          id="OKBtn"
        >
          OK
        </button>
      </div>
    </div>
  );
}
export default modal;

import "./App.css";
import "./index.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [openModal, setopenModal] = useState(false);
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Name, Username, Password, Cpassword, DOB);
    const dat = { Name, Username, Password, Cpassword, DOB };
    if (Name && Username && Password && Cpassword && DOB) {
      if (Password !== Cpassword) {
        alert("Password and Confirm password does not match");
      } else {
        setList([dat]);
        setopenModal(true);
        setName("");
        setUsername("");
        setPassword("");
        setDOB("");
        setCpassword("");
      }
    } else {
      alert("All fields are mandatory");
    }
  };

  return (
    <div>
      <h1 className="main">Register page</h1>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 5rem" }}>
          <form id="container" className="labels" onSubmit={handleSubmit}>
            <label>Name: </label>
            <br></br>
            <input
              type="text"
              name="name"
              value={Name}
              // onChange={(e) => console.log(e)}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              maxLength="30"
            ></input>
            <br></br>
            <label>UserName: </label>
            <br></br>
            <input
              type="email"
              name="Username"
              value={Username}
              autoComplete="off"
              maxLength="20"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label>Password: </label>
            <br></br>
            <input
              type="password"
              name="password"
              value={Password}
              autoComplete="off"
              maxLength="15"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <label>Confirm Password: </label>
            <br></br>
            <input
              type="password"
              name="cpassword"
              value={Cpassword}
              autoComplete="off"
              maxLength="15"
              onChange={(e) => setCpassword(e.target.value)}
            ></input>
            <br></br>
            <label>DOB: </label>
            <br></br>
            <input
              type="date"
              name="DOB"
              value={DOB}
              autoComplete="off"
              onChange={(e) => setDOB(e.target.value)}
            ></input>
          </form>
          <div style={{ textAlign: "center" }}>
            <button
              className="submit"
              onClick={(e) => {
                // setopenModal(true);
                handleSubmit(e);
              }}
            >
              submit
            </button>
          </div>
        </div>

        <div style={{ margin: "0 5rem" }}>
          {openModal && (
            <Modal setopenModal={setopenModal} data={list} setList={setList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

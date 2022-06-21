import React, { useState } from "react";
import "./Login.css";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  let navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log("Working");
    let all = [];
    const dbData = ref(database);
    onValue(dbData, async (snapshot) => {
      const data = await snapshot.val();
      for (let val of Object.values(data)) {
        all.push(val);
        // console.log("val : ", val);
      }
      console.log(all);
      if (all) {
        console.log("all If working");
        for (let i = 0; i < all.length; i++) {
          if (useremail === all[i].email && userpassword === all[i].password) {
            console.log("emails :", all[i].email);
            console.log("password : ", all[i].password);
            alert("welcome");
            setUserEmail("");
            setUserPassword("");
          }
          if (useremail === "admin@gmail.com" && userpassword === "1234") {
            return navigate("/");
          }
        }
      }
    });
  };

  const handleInput = (e) => {
    const { id, value } = e.target;

    if (id === "useremail") {
      setUserEmail(value);
    }
    if (id === "userpassword") {
      setUserPassword(value);
    }
  };
  return (
    <>
      {/* <h1 className="login-title">LOGIN...</h1> */}
      <div className="login">
        <div className="login-body">
          <div>
            <h1 className="login-title">LOGIN</h1>
          </div>
          <div>
            <h6 className="login-heading">
              Log in with your data that you entered during YOUR REGISTRATION.
            </h6>
          </div>
          <form onSubmit={(e) => Submit(e)}>
            <div className="email">
              <label className="login-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="useremail"
                value={useremail}
                onChange={(e) => handleInput(e)}
                className="login-input"
                placeholder="Email"
                required
              />
            </div>
            <div className="password">
              <label className="login-label" htmlFor="password">
                Password
              </label>
              <input // console.log("-----");
                className="login-input"
                type="password"
                value={userpassword}
                onChange={(e) => handleInput(e)}
                id="userpassword"
                placeholder="Password"
                required
              />{" "}
              <br />
            </div>
            <div className="">
              <button type="submit" className="login-button ">
                Log in
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="content">
            Don't have an account ?
            <Link to="/register" className="link-class">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="inner-login">
          <img src="/images/login.png" alt="" height="300px" width="300px" />
        </div>
      </div>
    </>
  );
};

export default Login;

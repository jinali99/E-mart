import React from "react";
import "./Register.css";
import { useState } from "react";
import { database } from "../../firebase";
import { Link } from "react-router-dom";
import { ref, push, child, update } from "firebase/database";
//https://www.section.io/engineering-education/registration-form-react.js-firebase/
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
    if (password !== confirmPassword) {
      setConfirmPassword("confirm password is not matched");
    } else {
      setConfirmPassword("");
    }
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  return (
    <div>
      {/* <h1 className="title">REGISTRATION</h1> */}
      <div className="register">
        <form>
          <div className="register-body">
            <div>
              <h1 className="register-title">REGISTER</h1>
            </div>

            <div>
              <div className="inner-input">
                <label className="register__label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="register__input"
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputChange(e)}
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="">
                <label className="register__label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => handleInputChange(e)}
                  id="lastName"
                  className="register__input"
                  placeholder="LastName"
                />
              </div>
              <div className="">
                <label className="register__label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleInputChange(e)}
                  className="register__input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="">
                <label className="register__label" htmlFor="password">
                  Password
                </label>
                <input
                  className="register__input"
                  type="password"
                  name="Password"
                  value={password}
                  onChange={(e) => handleInputChange(e)}
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="">
                <label className="register__label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="register__input"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => handleInputChange(e)}
                  id="confirmPassword"
                  name="Confirm_Password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <div className="footer">
              <button
                onClick={() => handleSubmit()}
                type="submit"
                className="register-button"
              >
                Register
              </button>
              <div>
                Already a member ? <Link to="/login">SIGN IN</Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="sidebar-register">
        <div className="inner-register">
          <div className="border-square">
            <img src="/images/re.png" alt="" height="320px" width="340px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;


// import React from "react";
// import "./Register.css";
// import { useState } from "react";
// import { database } from "../../firebase";
// import { Link } from "react-router-dom";
// import { ref, push, child, update } from "firebase/database";
// //https://www.section.io/engineering-education/registration-form-react.js-firebase/
// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "firstName") {
//       setFirstName(value);
//     }
//     if (id === "lastName") {
//       setLastName(value);
//     }
//     if (id === "email") {
//       setEmail(value);
//     }
//     if (id === "password") {
//       setPassword(value);
//     }
//     if (id === "confirmPassword") {
//       setConfirmPassword(value);
//     }
//   };
//   const handleSubmit = () => {
//     console.log(firstName, lastName, email, password, confirmPassword);

//     let obj = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     const newPostKey = push(child(ref(database), "posts")).key;
//     const updates = {};
//     updates["/" + newPostKey] = obj;
//     return update(ref(database), updates);
//   };

//   return (
//     <div>
//       {/* <h1 className="title">REGISTRATION</h1> */}
//       <div className="register">
//         <form>
//           <div className="register-body">
//             <div>
//               <h1 className="register-title">REGISTER</h1>
//             </div>

//             <div>
//               <div className="inner-input">
//                 <label className="register__label" htmlFor="firstName">
//                   First Name
//                 </label>
//                 <input
//                   className="register__input"
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => handleInputChange(e)}
//                   id="firstName"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div className="">
//                 <label className="register__label" htmlFor="lastName">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   value={lastName}
//                   onChange={(e) => handleInputChange(e)}
//                   id="lastName"
//                   className="register__input"
//                   placeholder="LastName"
//                 />
//               </div>
//               <div className="">
//                 <label className="register__label" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => handleInputChange(e)}
//                   className="register__input"
//                   placeholder="Email"
//                   required
//                 />
//               </div>
//               <div className="">
//                 <label className="register__label" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   className="register__input"
//                   type="password"
//                   value={password}
//                   onChange={(e) => handleInputChange(e)}
//                   id="password"
//                   placeholder="Password"
//                   required
//                 />
//               </div>
//               <div className="">
//                 <label className="register__label" htmlFor="confirmPassword">
//                   Confirm Password
//                 </label>
//                 <input
//                   className="register__input"
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => handleInputChange(e)}
//                   id="confirmPassword"
//                   placeholder="Confirm Password"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="footer">
//               <button
//                 onClick={() => handleSubmit()}
//                 type="submit"
//                 className="register-button"
//               >
//                 Register
//               </button>
//               <div>
//                 Already a member ? <Link to="/login">SIGN IN</Link>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="sidebar-register">
//         <div className="inner-register">
//           <div className="border-square">
//             <img src="/images/re.png" alt="" height="320px" width="340px" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;



//https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions


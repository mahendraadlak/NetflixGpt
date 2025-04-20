/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import LOGO from "../src/assets/images/Netflix_Logo.png";
import { signInSignUp } from "../utils/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isSignIn, setIsSignIng] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const name = useRef();

  function handleClick() {
    setIsSignIng(!isSignIn);
  }
  function handleSignin() {
    const message = signInSignUp(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    /// authantication signin / signup
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          navigate("./Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
          navigate("/");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("./Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
          navigate("/");
        });
    }
  }
  return (
    <div className="Login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo">
              <img src={LOGO} alt="logo" />
            </div>

            <div className="form-area">
              <h1>{!isSignIn ? "Sign Up" : "Sign In"}</h1>
              <div className="form-inside">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    ref={email}
                  />
                  {!isSignIn && <input type="text" placeholder="Enter Name" ref={name}/>}
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    ref={password}
                  />
                  <button onClick={handleSignin}>
                    {!isSignIn ? "Sign Up" : "Sign In"}
                  </button>
                  <p className="error-msg">{error}</p>
                </form>
                <p>
                  New to Netflix &nbsp;
                  <span onClick={handleClick}>
                    {!isSignIn ? "Sign In" : "Sign Up"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

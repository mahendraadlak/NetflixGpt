/* eslint-disable no-unused-vars */
import LOGO from "../src/assets/images/Netflix_Logo.png";
import USER from "../src/assets/images/userIcon.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import GptSearch from "./GptSearch";
export default function Header() {
  const navigate = useNavigate();
  function handleSingout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className="userheader">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="signouty-area">
              <div className="logo">
                <img src={LOGO} alt="logo" />
              </div>
              
              <div className="signout">
                <GptSearch/>
                <div className="singout-wrap">
                <img src={USER} alt="User Icon" />
                <button onClick={handleSingout} className="signout">
                  Sign Out
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

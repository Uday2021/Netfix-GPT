import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // an error occured
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png"
        alt="logo"
      />
      {user && (
        <div>
          <button onClick={handleSignOut} className="font-bold text-white">
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

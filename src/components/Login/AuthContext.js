import React, { useContext } from "react";
const AuthContext = React.createContext();

const Auth = ({ children }) => {
  const currentUser = () => localStorage.getItem("email");

  const signUp = (email) => {
    localStorage.setItem("loginInfo", JSON.stringify({ email }));
    return true;
  };

  const login = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      alert("Valid email address!");
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  };

  const logOut = () =>
    localStorage.setItem(
      "loginInfo",
      JSON.stringify({ ...currentUser(), isLoggedIn: false })
    );

  const changePassword = (pass) =>
    localStorage.setItem(
      "loginInfo",
      JSON.stringify({ ...currentUser(), pass: pass })
    );

  const value = {
    currentUser,
    signUp,
    login,
    logOut,
    changePassword,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);

export default Auth;

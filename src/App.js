import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import ResponsiveDrawer from "./components/Dashboard/Sidebar/ResponsiveDrawer";
import Login from "./components/Login/Login";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PersonalDetails from "../src/components/Forms/PersonalDetails";
import { ProtectedRoute } from "./components/axiosConfig/ProtectedRoute";
import CompanyProfile from "../src/components/Forms/CompanyProfile";
function App() {
  return (
    <div className="App">
      <>
        {/* <CompanyProfile /> */}
        {/* <ResetPassword /> */}
        {/* <Login /> */}
        {/* <PersonalDetails /> */}
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            {/* <Route path="dashboard" element={<Navbar />} />
        {/* <ResponsiveDrawer /> */}
            <Route path="dashboard" element={<ResponsiveDrawer />} />
          </Route>
        </Routes>
        {/* <Login /> */}
        {/* <Navbar /> */}

        {/* <ResetPassword /> */}
      </>
    </div>
  );
}

export default App;

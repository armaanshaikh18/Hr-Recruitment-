import { Container } from "react-bootstrap";
import {
  CircularProgress,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import React, { lazy } from "react";
import { Suspense } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Dashboard/Navbar/Navbar";
// import ResponsiveDrawer from "./components/Dashboard/Sidebar/ResponsiveDrawer";
// import Login from "./components/Login/Login";
// import ResetPassword from "./components/ResetPassword/ResetPassword";
// import PersonalDetails from "../src/components/Forms/PersonalDetails";
import PrivateRoute from "./components/axiosConfig/PrivateRoute";
import AuthContext from "./components/Login/AuthContext";
// import CompanyProfile from "../src/components/Forms/CompanyProfile";
import { createBrowserHistory } from "history";

import moment from "moment";

let launchMoment = require("moment");
require("moment-timezone");
moment.tz.setDefault("America/Los_Angeles");

const Login = lazy(() => import("./components/Login/Login"));
const ResetPassword = lazy(() =>
  import("./components/ResetPassword/ResetPassword")
);
const ResponsiveDrawer = lazy(() =>
  import("./components/Dashboard/Sidebar/ResponsiveDrawer")
);
const PersonalDetails = lazy(() =>
  import("../src/components/Forms/PersonalDetails")
);
const CompanyProfile = lazy(() =>
  import("../src/components/Forms/CompanyProfile")
);
const CompanyInfo = lazy(() =>
  import("../src/components/Forms/company/CompanyInfo")
);
const CompanyVideo = lazy(() =>
  import("../src/components/Forms/company/CompanyVideo")
);
const CompanyLink = lazy(() =>
  import("../src/components/Forms/company/CompanyLink")
);
const CompanyPhotos = lazy(() =>
  import("../src/components/Forms/company/CompanyPhotos")
);
const ChangePassword = lazy(() =>
  import("../src/components/ChangePassword/ChangePassword")
);
const PageNotFound = lazy(() => import("../src/reusable/PageNotFound"));
const newHistory = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router history={newHistory}>
          <Container>
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/resetpassword" exact component={ResetPassword} />
                {/* <Route path="dashboard" element={<Navbar />} />
        {/* <ResponsiveDrawer /> */}
                <PrivateRoute
                  path="/responsivedrawer"
                  exact
                  component={ResponsiveDrawer}
                />
                <PrivateRoute
                  path="/personaldetails"
                  exact
                  component={PersonalDetails}
                />
                <PrivateRoute
                  path="/changepassword"
                  exact
                  component={ChangePassword}
                />
                {/* <PrivateRoute
                  path="/companyprofile"
                  exact
                  component={CompanyProfile}
                /> */}
                <PrivateRoute
                  path="/companyinfo"
                  exact
                  component={CompanyInfo}
                />
                <PrivateRoute
                  path="/companyvideo"
                  exact
                  component={CompanyVideo}
                />
                <PrivateRoute
                  path="/companylink"
                  exact
                  component={CompanyLink}
                />
                <PrivateRoute
                  path="/companyphoto"
                  exact
                  component={CompanyPhotos}
                />
                <PrivateRoute path="/404" exact component={PageNotFound} />
                <Redirect to="/404"></Redirect>
              </Switch>
            </Suspense>
          </Container>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;

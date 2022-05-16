import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import Courses from "../pages/Course";
import Profile from "../pages/Profile";

export const ROUTES = [
  {
    isAuthenticated: false,
    path: "/",
    key: "ROOT",
    exact: true,
    component: Login,
  },
  {
    isAuthenticated: false,
    path: "/landing",
    key: "ROOT",
    exact: true,
    component: Landing,
  },
  {
    isAuthenticated: false,
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: Login,
  },
  {
    isAuthenticated: false,
    path: "/register",
    key: "REGISTER",
    exact: true,
    component: Register,
  },
  {
    isAuthenticated: false,
    path: "/myProfile",
    key: "MyProfile",
    exact: true,
    component: Profile,
  },
  {
    isAuthenticated: false,
    path: "/courses",
    key: "Courses",
    exact: true,
    component: Courses,
  },
];

export function RenderRoutes() {
  return (
    <Switch>
      {ROUTES.map((route) => {
        // const Wrapper = route.isAuthenticated
        //   ? AuthenticatedRoute
        //   : React.Fragment;

        return (
          <Route exact={route.exact} path={route.path} key={route.key}>
            {/* <Wrapper> */}
            <route.component />
            {/* </Wrapper> */}
          </Route>
        );
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

const RootRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RenderRoutes />
    </Suspense>
  );
};

export default RootRouter;

import { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ROUTES } from "./routes";

const RouterOutlet = () => {
  const { path } = useRouteMatch();

  const routes = ROUTES.find((route) => route.path === path) || {
    children: [],
  };

  return (
    <Switch>
      <Suspense fallback={<>Loading...</>}>
        <>
          {routes.children.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component {...route.props} />
            </Route>
          ))}
        </>
      </Suspense>
    </Switch>
  );
};

export default RouterOutlet;

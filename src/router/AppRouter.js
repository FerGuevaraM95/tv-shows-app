import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { HomeRouter } from "./HomeRouter";
import { DetailPage } from "../pages/DetailPage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/detail" component={DetailPage} />
          <Route path="/" component={HomeRouter} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

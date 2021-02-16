import { Redirect, Route, Switch } from "react-router-dom";

import { PopularPage } from "../pages/PopularPage";
import { TopRatedPage } from "../pages/TopRatedPage";
import { AiringTodayPage } from "../pages/AiringTodayPage";
import { Navbar } from "../components/layout/Navbar";
import { Filter } from "../components/layout/Filter";

export const HomeRouter = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Switch>
        <Route exact path="/popular" component={PopularPage} />
        <Route exact path="/top-rated" component={TopRatedPage} />
        <Route exact path="/airing-today" component={AiringTodayPage} />

        <Redirect to="/popular" />
      </Switch>
    </div>
  );
};

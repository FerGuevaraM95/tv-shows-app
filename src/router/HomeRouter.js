import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { Filter } from "../components/layout/Filter";
import { Loader } from "../components/layout/Loader";

const PopularPage = React.lazy(() => import("../pages/PopularPage"));
const TopRatedPage = React.lazy(() => import("../pages/TopRatedPage"));
const AiringTodayPage = React.lazy(() => import("../pages/AiringTodayPage"));

const HomeRouter = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <Navbar />
        <Filter />
        <Switch>
          <Route exact path="/popular" component={PopularPage} />
          <Route exact path="/top-rated" component={TopRatedPage} />
          <Route exact path="/airing-today" component={AiringTodayPage} />

          <Redirect to="/popular" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default HomeRouter;

import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Loader } from '../components/layout/Loader';
const HomeRouter = React.lazy(() => import("./HomeRouter"));
const DetailPage = React.lazy(() => import("../pages/DetailPage"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/show-detail/:id" component={DetailPage} />
            <Route path="/" component={HomeRouter} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

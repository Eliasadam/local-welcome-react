import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../components/pages/NotFoundPage';
const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/dashboard" component={App} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

import NotFoundPage from '../components/pages/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/dashboard" component={App} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
export default AppRouter;

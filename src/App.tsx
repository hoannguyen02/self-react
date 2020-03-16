import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Profile from './pages/profile/Profile';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Footer from './shared/components/footer/Footer';
import Header from './shared/components/header/Header';
import './shared/scss/bootstrap-grid.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

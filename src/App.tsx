import React from 'react';
import './App.scss';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import './shared/scss/bootstrap-grid.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="text-center">Self React</h2>
      </main>
      <Footer />
    </>
  );
};

export default App;

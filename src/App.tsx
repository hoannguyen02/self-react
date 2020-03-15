import React from 'react';
import './App.scss';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Self React</h2>
      </main>
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
const App = () => {
  return (
    <div id="app">
      <Navigation />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;

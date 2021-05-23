import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
function App() {
  return (
    <Router>
      <Route path='/'>
        <Header />
        <Main />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollTop />
      </Route>
    </Router>
  );
}

export default App;

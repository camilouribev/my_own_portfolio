import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SmoothScrollbar from './components/SmoothScrollbar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollbar>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Footer />
          </Route>
        </Switch>
      </SmoothScrollbar>
    </Router>
  );
}

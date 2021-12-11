import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/projects">
        <Projects/>
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



/*<Router>
<Routes>
  <Route element={Home} path='/' exact />
  <Route element={About} path='/about' />
  <Route element={Projects} path='/projects' />
  <Route elementt={Contact} path='/contact' />
</Routes>
</Router>*/
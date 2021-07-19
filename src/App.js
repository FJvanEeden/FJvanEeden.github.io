import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './components/Projects.jsx'; 
import Articles from './components/Articles.jsx'; 
import About from './components/About.jsx'; 
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
  
        {/* page routes */}
        <Route exact path="/" baseName={process.env.PUBLIC_URL}/>
        <Route exact path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        {/* navigation bar */}
        <div className="navigation">
          {/* <img src={logo} className="logo-image" alt="Logo Image" /> */}
          <div className="navigation-sub">
            <Link to="/" className="item">Home</Link>                      
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>

        {/* spinning logo */}
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    </BrowserRouter>

  );
}
 
export default App;

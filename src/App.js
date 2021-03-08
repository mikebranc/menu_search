import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Home from './Pages/Home'
import Results from './Pages/Results'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
function App() {
return(
  <Router>
      <>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
  
}

export default App;

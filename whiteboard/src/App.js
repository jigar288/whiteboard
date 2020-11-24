import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Grades from './pages/Grades'
import MathGrades from './pages/MathGrades';
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import EventsByCourse from './components/EventsByCourse'
import SubmitAssignment from './components/SubmitAssignment'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/grades" component={Grades} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/events" component={EventsByCourse} />
          <Route exact path="/math-grades" component={MathGrades} />
          <Route exact path="/submit-assignment" component={SubmitAssignment} />          
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

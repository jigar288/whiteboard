import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Grades from './pages/Grades'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import EventsByCourse from './components/EventsByCourse'
import SubmitAssignmentsPage from './pages/SubmitAssignmentsPage'
import SubjectSpecificGrades from './components/SubjectSpecificGrades'
import ViewGradeDetails from './components/ViewGradeDetails'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/grades" component={Grades} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/events" component={EventsByCourse} />
          <Route exact path="/math-grades" component={SubjectSpecificGrades} />
          <Route exact path="/english-grades" component={SubjectSpecificGrades} />
          <Route exact path="/reading-grades" component={SubjectSpecificGrades} />
          <Route exact path="/social-studies-grades" component={SubjectSpecificGrades} />
          <Route exact path="/science-grades" component={SubjectSpecificGrades} />
          <Route exact path="/submit-assignment" component={SubmitAssignmentsPage} />          
          <Route exact path="/view-grade-details" component={ViewGradeDetails} />      
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

//fixme: some point later try using map for SubjectSpecificGrades

export default App;

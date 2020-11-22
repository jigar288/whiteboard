import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Grades from './pages/Grades'
import MathGrades from './pages/MathGrades';
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import EventsByCourse from './components/EventsByCourse'
import App from './App'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>    
    {/* <Grades /> */}
    {/* <MathGrades/> */}
    {/* <MathGrades/> */}
    {/* <Calendar/>     */}
    {/* <EventsByCourse/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

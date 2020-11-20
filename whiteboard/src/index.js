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
import EventsByCourse from './components/EventsByCourse'

ReactDOM.render(
  <React.StrictMode>    
    {/* <Grades /> */}
    {/* <MathGrades/> */}
    {/* <MathGrades/> */}
    {/* <Calendar/>     */}
    <EventsByCourse/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

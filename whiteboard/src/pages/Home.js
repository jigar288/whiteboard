import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



class Home extends React.Component {

    constructor(props){
        super(props);
    }
 
    render() {
       return (
          <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/grades">Grades</Link>
                    </li>
                    <li>
                    <Link to="/calendar">Calendar</Link>
                    </li>
                </ul>
            </nav>
          </div>
       )
    }
}

export default withRouter(Home);
 
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {PrimaryButton, Stack, DefaultPalette, TextField, Label} from 'office-ui-fabric-react';
import Home from './Home'
import { Redirect } from "react-router-dom";

import '../css/login.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


const columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
  };
  

class HomeLogin extends React.Component {
    constructor(props){
      super(props);
      this.state = {courses: []}
    }
  
    _studentClicked = () =>{
        this.props.history.push("/login");
    }

    _parentClicked = () =>{
        this.props.history.push("/login");
    }
    
    render() {
      return (
        <div className="Login">
    
          <Stack {...columnProps}>
          <Label className="Label mx-auto">
              <h4>Welcome To Whiteboard
                </h4></Label>
            <PrimaryButton text="Student Portal" onClick={this._studentClicked} allowDisabledFocus/>
            <PrimaryButton text="Parent Portal" onClick={this._parentClicked} allowDisabledFocus/>
          </Stack>
    
        </div>
      );
    }
  }

export default withRouter(HomeLogin);
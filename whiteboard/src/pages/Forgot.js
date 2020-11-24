import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {PrimaryButton, Stack, DefaultPalette, TextField, Label} from 'office-ui-fabric-react';
import Home from './Home'
import { Redirect } from "react-router-dom";

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
  

class Forgot extends React.Component {
    constructor(props){
      super(props);
      this.state = {courses: []}
    }
  
    _forgotClicked = () =>{
        alert("Password Reset Email Sent!")
    }

    _backClicked = () =>{
      this.props.history.push("/login");
    }
    
    render() {
      return (
        <div className="Login">
    
          <Stack {...columnProps}>
            <Label>Welcome To Whiteboard</Label>
            <Label>Forgot Password</Label>
            <TextField label="Enter Email To Reset Password" placeholder="Enter Email Here" />
            <PrimaryButton text="Reset Password" onClick={this._forgotClicked} allowDisabledFocus/>
            <PrimaryButton text="<- Back" onClick={this._backClicked} allowDisabledFocus/>
          </Stack>
    
        </div>
      );
    }
  }

export default withRouter(Forgot);
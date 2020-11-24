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
  

class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {courses: []}
    }
  
    _loginClicked = () =>{
        this.props.history.push("/");
    }
    _forgotPasswordClicked = () =>{
        this.props.history.push("/forgot");
    }

    _back = () => {
        this.props.history.push("/homelogin");
    }
    
    render() {
      return (
        <div className="Login">
    
          <Stack {...columnProps}>
            <Label>Welcome To Whiteboard</Label>
            <Label>Login</Label>
            <TextField label="Email" placeholder="Enter Email Here" />
            <TextField label="Password" placeholder="Enter Password Here" type="password" canRevealPassword />
            <PrimaryButton text="Login" onClick={this._loginClicked} allowDisabledFocus/>
            <PrimaryButton text="Forgot Password?" onClick={this._forgotPasswordClicked} allowDisabledFocus/>
            <Label></Label>
            <PrimaryButton text="<-- Back" onClick={this._back} allowDisabledFocus/>
          </Stack>
    
        </div>
      );
    }
  }

export default withRouter(Login);
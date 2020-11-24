import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {PrimaryButton, Stack, DefaultPalette, TextField, Label} from 'office-ui-fabric-react';
import Home from './Home'
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
    return  <Redirect  to="/grades" />
  }
  _forgotPasswordClicked = () =>{
    return  <Redirect  to="/grades/" />
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
          <Label></Label>
          <PrimaryButton text="Forgot Password?" onClick={this._forgotPasswordClicked} allowDisabledFocus/>
        </Stack>
  
      </div>
    );
  }
}

export default Login;
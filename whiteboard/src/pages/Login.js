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


class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {courses: []}
    }


    _loginClicked = () =>{
        this.props.history.push("/calendar");
    }
    _forgotPasswordClicked = () =>{
        this.props.history.push("/forgot");
    }

    _back = () => {
        this.props.history.push("/home-login");
    } 


    render() {
      return (

        <div className="Login">
            <Form>
            <Stack className="Stack" {...columnProps}>
                <Label className="Label mx-auto">
                <h4>Welcome To Whiteboard
                    </h4></Label>
                <Label className="mx-auto"><h5> {this.props.location.state.userType} Login</h5>  </Label>

                <TextField label="Email" placeholder="Enter Email Here"/>
                <TextField label="Password" placeholder="Enter Password Here" type="password" canRevealPassword />
                <PrimaryButton text="Login" onClick={this._loginClicked} allowDisabledFocus/>
                <PrimaryButton text="Forgot Password?" onClick={this._forgotPasswordClicked} allowDisabledFocus onRengerIcon="Back"/>
                <Label></Label>
                <PrimaryButton text="Switch User Type" onClick={this._back} allowDisabledFocus/>
            </Stack>
          </Form>

        </div>

      );
    }
  }

export default withRouter(Login); 
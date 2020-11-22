import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import {PrimaryButton, Stack, DefaultPalette, TextField, MaskedTextField, Label} from 'office-ui-fabric-react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function _alertClicked(){
    alert('Clicked');
  }

  const columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
  };

  return (
    <div className="Login">

      <Stack {...columnProps}>
        <Label>Welcome To Whiteboard</Label>
        <Label>Login</Label>
        <TextField label="Email" placeholder="Enter Email Here" />
        <TextField label="Password" placeholder="Enter Password Here" type="password" canRevealPassword />
        <PrimaryButton text="Login" onClick={_alertClicked} allowDisabledFocus/>
      </Stack>

        {/*
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <PrimaryButton text="Login" onClick={_alertClicked} allowDisabledFocus/>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      */}
    </div>
  );
}

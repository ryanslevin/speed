import React from "react";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { useAuth0 } from '@auth0/auth0-react';


const Auth0Buttons = () => {

  const { loginWithRedirect, logout, isAuthenticated, isLoading} = useAuth0();

  const signin = (
    <Button onClick={() => loginWithRedirect()}>
      Sign In
    </Button>
  );

  const signup = (
    <Button onClick={() => loginWithRedirect({screen_hint: "signup"})}>
      Sign Up
    </Button>
  );

  const signout = (
    <Button color="secondary" onClick={() => logout({returnTo: window.location.origin})}>
      Sign Out
    </Button>
  )

  const spinner = <CircularProgress />

  return isLoading ? spinner : isAuthenticated ? signout : signin;

}

export default Auth0Buttons;

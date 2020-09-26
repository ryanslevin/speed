import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Auth0Buttons from './Components/Auth0Buttons';
import Home from './Pages/Home';
import Test from './Pages/Test';
import NavBar from './Components/NavBar';

function App() {

  const [page, setPage] = useState("home");

  const pages = {
    home: <Home />,
    test: <Test />
  };

  const handleNav = (page) => {
    setPage(page.toLowerCase());
  };

  useEffect(() => {
    console.log(page);
  }, [page])

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Auth0Buttons />
        <NavBar handleNav={handleNav} current={page} />
      </Grid>
      <Grid item xs={10}>
        {pages[page]}
      </Grid>
    </Grid>
  );
}

export default App;

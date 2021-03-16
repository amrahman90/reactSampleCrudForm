import React from 'react';
import { Redirect } from 'react-router-dom';

const Home: React.FunctionComponent = () => {

  return (
    <Redirect to="/form" />
  );
};

export default Home;

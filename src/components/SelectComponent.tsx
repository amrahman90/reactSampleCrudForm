import React from 'react';
import { useParams } from 'react-router';
import { Redirect, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const SelectComponent: React.FunctionComponent = () => {
  const ss = useParams();
  console.log('ssss', ss);
  return (
    <div>
      <p style={{ marginTop: '120px' }}>select component</p>
      <Redirect to="/form"/>
    </div>
  );
};

export default SelectComponent;

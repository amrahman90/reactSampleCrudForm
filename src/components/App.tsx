import React from 'react';
import './App.scss';
import CurdForm from './CurdForm';
import CurdOverviewTable from './CurdOverviewTable';
import { Container } from '@material-ui/core/';
import MaterialAppBar from './Appbar/MaterialAppBar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <MaterialAppBar />
      <Container maxWidth="sm">
        <Route
          exact path="/"
          render={(props) => (
            <CurdForm {...props} id={1} />
          )}
        />
        <Route
          path="/details"
          component={CurdOverviewTable}
        />
      </Container>
    </Router>
  )
};

export default App;
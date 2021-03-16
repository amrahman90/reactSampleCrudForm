import React from 'react';
import './App.scss';
import CurdForm from './CurdForm';
import CurdOverviewTable from './CurdOverviewTable';
import { Container } from '@material-ui/core/';
import MaterialAppBar from './Appbar/MaterialAppBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectComponent from './SelectComponent';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <MaterialAppBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={SelectComponent} />
          <Route path="/form/:id?" component={CurdForm} />
          <Route path="/details" component={CurdOverviewTable} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

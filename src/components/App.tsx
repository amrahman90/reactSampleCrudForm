import React from 'react';
import './App.scss';
import CurdForm from './CurdForm';
import CurdOverviewTable from './CurdOverviewTable';
import { Container } from '@material-ui/core/';
import MaterialAppBar from './Appbar/MaterialAppBar';

const App: React.FunctionComponent = () => {
  return (
    <>
      <MaterialAppBar />
      <Container maxWidth="sm">
        <CurdForm />
        <CurdOverviewTable />
      </Container>
    </>
  )
};

export default App;
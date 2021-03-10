import React from 'react';
import './App.scss';
import CurdForm from './CurdForm';
import CurdOverviewTable from './CurdOverviewTable';
import { Container } from '@material-ui/core/';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Container maxWidth="sm">
        <CurdForm />
        <CurdOverviewTable />
      </Container>
    </>
  )
};

export default App;
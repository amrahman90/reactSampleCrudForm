import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const MaterialAppBar: React.FunctionComponent = () => {

  return (

    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">CURD Form</Typography>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default MaterialAppBar;
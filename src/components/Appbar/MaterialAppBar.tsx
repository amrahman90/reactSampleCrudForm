import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const MaterialAppBar: React.FunctionComponent = () => {

  return (

    <>
      <AppBar>
        <Toolbar>
          <Link className="link-style" to="/">
            <Typography variant="h6">CURD Form</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MaterialAppBar;
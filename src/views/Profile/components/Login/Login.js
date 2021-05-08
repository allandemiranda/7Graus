import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Login = props => {
  const { user, className, ...rest } = props;

  const classes = useStyles();

  const [progress, setProgress] = useState(true);

  useEffect(()=>{
    if(user){
      setProgress(false)
    }
  },[user])

  return (
    <div>
      {progress ? <CircularProgress/> : 
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardHeader />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>            
                <TableRow selected >
                  <TableCell>ID</TableCell>
                  <TableCell>{user.login.uuid}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>User Name</TableCell>
                  <TableCell>{user.login.username}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>Password</TableCell>
                  <TableCell>{user.login.password}</TableCell>
                </TableRow>                              
              </TableBody>
            </Table>
          </CardContent>   
        </Card>}
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,  
};

export default Login;
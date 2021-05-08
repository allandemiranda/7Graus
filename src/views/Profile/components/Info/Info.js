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

const Info = props => {
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
                  <TableCell>Gender</TableCell>
                  <TableCell>{user.gender}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>E-mail</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>Telephone</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>Cell</TableCell>
                  <TableCell>{user.cell}</TableCell>
                </TableRow>
                <TableRow selected >
                  <TableCell>Nationality</TableCell>
                  <TableCell>{user.nat}</TableCell>
                </TableRow>                               
              </TableBody>
            </Table>
          </CardContent>   
        </Card>}
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,  
};

export default Info;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'utils/axios';
import { Page } from 'components';
import { Header, UserCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const ListUsers = (props) => {
  const classes = useStyles();
  const { match } = props;
  const { number } = match.params;
  const [users, setUsers] = useState([]);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      if(number){
        setTimeout(() => axios.get('/api/?results=' + number).then(response => {
          if (mounted) {
            setUsers(response.data.results);
          }
        }),
        2000);
      } else {
        setTimeout(() => axios.get('/api/?results=10').then(response => {
          if (mounted) {
            setUsers(response.data.results);
          }
        }),
        2000);
      }      
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (users.length != 0) {
      setProgress(false);
    }
  }, [users]);

  return (
    <Page 
      className={classes.root}
      title="User List"
    >
      <Header />
      {progress ? (
        <CircularProgress />
      ) : (
        <div className={classes.results}>
          <Typography
            color="textSecondary" 
            gutterBottom 
            variant="body2"
          >
            {users.length} Users found.
          </Typography>
          {users.map(user => (
            <UserCard
              user={user}
            />
          ))}
        </div>
      )}
    </Page>
  );
};

ListUsers.propTypes = {
  match: PropTypes.object.isRequired
};

export default ListUsers;

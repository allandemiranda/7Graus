import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography  
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-table',
    marginBottom: theme.spacing(2),
    marginRight: '0.5%'
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const UserCard = props => {
  const { user, className, ...rest } = props;

  const classes = useStyles();

  return (    
    <Card
      {...rest}
      className={clsx(classes.root, className)}      
    >
      <CardActionArea
        component={RouterLink}
        to={{pathname:'/profile/', state: {user}}}
      >
        <CardContent 
          className={classes.content}
        >
          <div className={classes.header}>
            <Avatar
              alt="Author"
              className={classes.avatar}
              src={user.picture.thumbnail}
            />
            <div>
              {user.name.title} {user.name.last}
              <Typography variant="body2">
                {user.gender}
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

UserCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UserCard;

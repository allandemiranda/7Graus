import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  cover: {
    position: 'relative',
    height: 360,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage:
        'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
    },
    '&:hover': {
      '& $changeButton': {
        visibility: 'visible'
      }
    }
  },
  changeButton: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.white,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(3),
      bottom: 'auto'
    },
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  addPhotoIcon: {
    marginRight: theme.spacing(1)
  },
  container: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    padding: theme.spacing(2, 3),
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    border: `2px solid ${theme.palette.white}`,
    height: 120,
    width: 120,
    top: -60,
    left: theme.spacing(3),
    position: 'absolute'
  },
  details: {
    marginLeft: 136
  },
  actions: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  pendingButton: {
    color: theme.palette.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  personAddIcon: {
    marginRight: theme.spacing(1)
  },
  mailIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const { className, user, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div
        className={classes.cover}
        style={{ backgroundImage: user.gender==='male' ? 'url(/images/covers/cover_2.jpg)' : 'url(/images/covers/cover_1.jpg)'}}
      />
      <div className={classes.container}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          src={user.picture.large}
        />
        <div className={classes.details}>          
          <Typography
            component="h1"
            variant="h4"
          >
            {user.name.title} {user.name.first} {user.name.last}
          </Typography>
        </div>        
      </div>      
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Header;

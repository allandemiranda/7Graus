import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const usersReload = () => {
    window.location.reload();
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Users
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            List
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            dataTestid="reload-button"
            onClick={() => usersReload()}
            variant="contained"
          >
            Reload
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;

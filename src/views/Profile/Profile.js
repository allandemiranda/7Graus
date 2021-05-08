import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Info, Login, Location } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Profile = props => {
  const { match, location } = props;
  const classes = useStyles();

  const [tab, setTab] = useState(match.params);  

  const tabs = [
    { value: 'info', label: 'Information' },
    { value: 'login', label: 'Login' },
    { value: 'location', label: 'Location' },
  ];

  if (!location.state) {
    return <Redirect to="/errors/error-404" />;
  }

  const { user } = location.state    

  if (!tabs.find(t => t.value === tab)) {
    setTab('info');
  }

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <Header user={user} />
      <div className={classes.inner}>
        <Tabs
          onChange={(event, value) => setTab(value)}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {tab === 'info' && <Info user={user} />}
          {tab === 'login' && <Login user={user} />}
          {tab === 'location' && <Location user={user} />}
        </div>
      </div>
    </Page>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired  
};

export default Profile;

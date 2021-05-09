/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/users" />
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/users/',
        exact: true,
        component: lazy(() => import('views/ListUsers'))
      },
      {
        path: '/users/:number',
        exact: true,
        component: lazy(() => import('views/ListUsers'))
      },      
      {
        path: '/profile/',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;

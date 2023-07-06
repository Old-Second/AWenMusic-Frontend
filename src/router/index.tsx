import { Redirect } from 'react-router';
import { lazy } from 'react';
import store from '../store';

import myMusicRoutes from './myMusic/index';
import { playPageRouter, albumRouter, artistRouter, toplistRouter, searchRouter } from './detail';
import discoverRoutes from './discover';
import { routerType } from '../constant/routerType';

const Login = lazy(() => import('../views/Login/index'));
const Register = lazy(() => import('../views/register/index'));
const Home = lazy(() => import('../views/home/index'));
const discover = lazy(() => import('../views/discover/index'));

const routes: routerType[] = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/Login" />;
    }
  },
  {
    path: '/Login',
    exact: true,
    render: () => {
      // @ts-ignore
      const userMsg = store.getState().getIn(['loginReducer', 'login', 'userMsg']);
      if (!userMsg || !userMsg.token) {
        return <Login />;
      } else {
        return <Redirect to="/Home" />;
      }
    }
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Home',
    component: Home,
    routes: [
      {
        path: '/Home',
        exact: true,
        render: () => {
          return <Redirect to="/Home/discover" />;
        }
      },
      {
        path: '/Home/discover',
        component: discover,
        routes: discoverRoutes
      },
      ...myMusicRoutes,
      albumRouter,
      playPageRouter,
      artistRouter,
      toplistRouter,
      searchRouter
    ]
  }
];

export default routes;

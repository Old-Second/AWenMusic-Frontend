import { routerType } from '../../constant/routerType';
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

const albumDetail = lazy(() => import('../../components/content/detail/albumDetail/index'));
const playPage = lazy(() => import('../../components/content/playPage/index'));
const artistDetail = lazy(() => import('../../components/content/detail/artistDetail/index'));
const toplistDetail = lazy(() => import('../../components/content/detail/toplistDetail/index'));

const searchDetail = lazy(() => import('../../components/content/detail/searchDetail/index'));
const searchSong = lazy(() => import('../../components/content/detail/searchDetail/childCpn/song/index'));
const searchAlbum = lazy(() => import('../../components/content/detail/searchDetail/childCpn/album/index'));
const searchArtist = lazy(() => import('../../components/content/detail/searchDetail/childCpn/artist/index'));

const albumRouter: RouteConfig = {
  path: '/Home/albumDetail',
  component: albumDetail
};
const playPageRouter: RouteConfig = {
  path: '/Home/playPage',
  component: playPage
};
const artistRouter: RouteConfig = {
  path: '/Home/artistDetail',
  component: artistDetail
};
const toplistRouter: RouteConfig = {
  path: '/Home/toplistDetail',
  component: toplistDetail
};

const routes: RouteConfig[] = [
  {
    path: '/Home/searchDetail/song',
    component: searchSong
  },
  {
    path: '/Home/searchDetail/album',
    component: searchAlbum
  },
  {
    path: '/Home/searchDetail/artist',
    component: searchArtist
  }
];
const searchRouter: routerType = {
  path: '/Home/searchDetail',
  component: searchDetail,
  routes: routes
};
export { playPageRouter, albumRouter, artistRouter, toplistRouter, searchRouter };

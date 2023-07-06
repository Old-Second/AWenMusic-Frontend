import request from '../request';
import store from '../../store/index';

//用户喜欢歌曲
export function setUserFavorite(id: string) {
  return request({
    url: '/user/favorite',
    method: 'post',
    data: {
      id
    },
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token
    }
  });
}

//获取用户喜欢歌曲
export function getUserFavorite(offset: number, limit: number) {
  return request({
    url: '/user/favorite',
    params: {
      offset,
      limit
    },
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token
    }
  });
}

//取消用户喜欢
export function cancelFavorite(songId: string) {
  return request({
    url: '/user/favorite/cancel',
    method: 'post',
    data: {
      songId: songId
    },
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token
    }
  });
}

//获取用户收藏
export function getUserSub(url: string, offset: number, limit: number) {
  return request({
    url: `/sub/user/${url}`,
    params: {
      offset,
      limit
    },
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token
    }
  });
}

//获取当前登录用户详情
export function getUserDetail() {
  return request({
    url: '/user/detail',
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token
    }
  });
}

//上传用户头像
export function uploadAvatar(formData: FormData) {
  return request({
    url: '/user/upload/avatar',
    method: 'post',
    headers: {
      // @ts-ignore
      authorization: store.getState().getIn(['loginReducer', 'login', 'userMsg']).token,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  });
}

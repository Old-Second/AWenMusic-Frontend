import { Map } from 'immutable';
import { ISongStore } from '../../../../constant/store/song';
import { HOST_NAME } from '../../../../config';

const defaultState = Map<ISongStore>({
  song: {
    songUrl: `${HOST_NAME}/song/source?id=`,
    songDetail: {
      id: '',
      album: {
        id: '',
        name: '',
        coverUrl: `${HOST_NAME}/album/cover?id=`
      },
      artist: {
        name: '',
        id: ''
      },
      user: { userName: '', avatarUrl: '', userId: '' },
      name: '',
      duration: 0
    },
    lyric: [{ index: 1, duration: 0, content: '' }],
    lyricLine: '',
    currentLyricIndex: 0,
    //播放列表
    playlist: [],
    currentIndex: 0,
    playMode: 0 //0 列表循环 1 随机播放 2 单曲循环
  }
});
const reducer = (state = defaultState, action: any) => {
  const { type } = action;

  switch (type) {
    case 'changeSongURL':
      return state.setIn(['song', 'songUrl'], action.songUrl);
    case 'changeSongDetail':
      return state.setIn(['song', 'songDetail'], action.songDetail);
    case 'changePlaylist':
      return state.setIn(['song', 'playlist'], action.playlist);
    case 'changeLyric':
      return state.setIn(['song', 'lyric'], action.lyric);
    case 'changeLyricLine':
      return state.setIn(['song', 'lyricLine'], action.lyricLine);
    case 'changeCurrentLyricIndex':
      return state.setIn(['song', 'currentLyricIndex'], action.currentLyricIndex);
    case 'changeCurrentIndex':
      return state.setIn(['song', 'currentIndex'], action.currentIndex);
    case 'changePlayMode':
      return state.setIn(['song', 'playMode'], action.playMode);
    default:
      return state;
  }
};
export default reducer;

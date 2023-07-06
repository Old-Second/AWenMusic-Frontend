import { IUser } from '../user';
import { IArtist } from '../artist';
import { IAlbum } from '../album';

interface ISongDetail {
  id: string;
  name: string;
  duration: number;
  album: {
    id: string;
    name: string;
    coverUrl: string;
  };
  user: IUser;
  artist: {
    id: string;
    name: string;
  };
}

interface IPlaylist {
  id: string;
  name: string;
  publishTime: string;
  alia: string;
  artist: IArtist;
  album: IAlbum;
  duration: number;
}

interface ISongStore {
  songUrl: string;
  lyric: { index: number; content: string; duration: number }[] | string;
  lyricLine: string;
  currentIndex: number;
  currentLyricIndex: number;
  playMode: number;
  songDetail: ISongDetail;
  playlist: IPlaylist[];
}

export type { ISongStore, ISongDetail };

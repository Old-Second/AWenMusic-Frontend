import { IUser } from '../user';
import { IPlaylist } from '../playlist';
import { IAlbum } from '../album';
import { IArtist } from '../artist';
import { ISong } from '../song';

interface ISearchStore {
  album: IAlbum[];
  artist: IArtist[];
  song: ISong[];
}

export type { ISearchStore };

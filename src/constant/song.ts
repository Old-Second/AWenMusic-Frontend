import { IAlbum } from './album';
import { IArtist } from './artist';

interface ISong {
  id: string;
  name: string;
  publishTime: string;
  alia?: string;
  album: IAlbum;
  artist: IArtist;
  playCount?: number;
  duration?: number;
  diff?: number;
}

export type { ISong };

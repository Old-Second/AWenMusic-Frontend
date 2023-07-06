import React, { memo, FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeSongDetailAction } from '../../../../playCoin/store/actionCreators';
import Album from './childCpn/album';
import { ISong } from '../../../../../../constant/albumDetail';
import { IAlbum } from '../../../../../../constant/album';
import { AlbumsWrapper } from './style';

interface IAlbums extends IAlbum {
  songs: ISong[];
}

interface IProps {
  albums: IAlbums[];
}

const Albums: FC<IProps> = ({ albums }) => {
  const dispatch = useDispatch();
  const play = (item: ISong, index: number) => {
    dispatch(changeSongDetailAction(item.id));
  };
  return (
    <AlbumsWrapper>
      <ul className="album-song-list">
        {albums.length !== 0 &&
          albums.map((item, index) => {
            return (
              <li key={item.id}>
                <Album album={item} play={(item: ISong, index: number) => play(item, index)} />
              </li>
            );
          })}
      </ul>
    </AlbumsWrapper>
  );
};
export default memo(Albums);

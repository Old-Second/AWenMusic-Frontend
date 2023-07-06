import React, { memo, ReactElement, FC } from 'react';
import { useDispatch } from 'react-redux';
import { SongListWrapper } from './style';
import { IAlbumDetail, ISong } from '../../../constant/albumDetail';
import ListItem from './childCpn/listItem';
import { changeSongDetailAction } from '../playCoin/store/actionCreators';

interface IProps {
  albumDetail: IAlbumDetail;
}

const SongList: FC<IProps> = ({ albumDetail }): ReactElement => {
  const dispatch = useDispatch();
  const play = (item: ISong, id: string, name: string) => {
    dispatch(changeSongDetailAction(id));
  };
  return (
    <SongListWrapper>
      <ul className="song-list">
        {albumDetail.songs &&
          albumDetail.songs.map((item, index) => {
            return (
              <li key={item.id}>
                <ListItem
                  index={index}
                  id={item.id}
                  name={item.name}
                  alName={albumDetail.name}
                  createName={albumDetail.artist.name}
                  time={item.dt!}
                  play={(id: string, name: string) => play(item, id, name)}
                  arId={albumDetail.artist?.id}
                />
              </li>
            );
          })}
      </ul>
    </SongListWrapper>
  );
};
export default memo(SongList);

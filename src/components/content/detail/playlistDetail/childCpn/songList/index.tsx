import React, { memo, FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { changeSongDetailAction } from '../../../../playCoin/store/actionCreators';
import { ISong } from '../../../../../../constant/song';
import { SongListWrapper } from './style';
import SongListItem from '../../../../songListItem';
import { addToplistPlayCount } from '../../../../../../network/toplist/toplist';

interface IProps {
  songs: Array<ISong>;
  pId?: string;
  isShowUp: boolean;
  tId?: string;
}

const SongList: FC<IProps> = ({ songs, pId, isShowUp, tId }): ReactElement => {
  const dispatch = useDispatch();
  const playSong = (item: ISong, id: string): void => {
    dispatch(changeSongDetailAction(id));
    if (tId) {
      addToplistPlayCount(tId)
        .then(() => {})
        .catch(() => {});
    }
  };
  return (
    <SongListWrapper>
      <ul className="song-list">
        {songs &&
          songs.length !== 0 &&
          songs.map((item, index) => {
            return (
              <li key={item.id}>
                <SongListItem
                  index={index}
                  state={item.name}
                  id={item.id}
                  creator={item.artist?.name}
                  alName={item.album?.name}
                  alId={item.album?.id}
                  arId={item.artist?.id}
                  time={item.publishTime}
                  dt={item.duration!}
                  isShowUp={isShowUp}
                  diff={item.diff}
                  onClick={(id: string) => playSong(item, id)}
                />
              </li>
            );
          })}
      </ul>
    </SongListWrapper>
  );
};
export default memo(SongList);

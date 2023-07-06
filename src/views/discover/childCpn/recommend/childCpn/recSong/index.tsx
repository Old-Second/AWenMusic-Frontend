import React, { memo, FC, ReactElement, useEffect, useState, MouseEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getRecSong } from '../../../../../../network/song';
import { Image, Spin } from 'antd';
import { RecSongWrapper } from './style';

import ListInfo from '../../../../../../components/content/listInfo';
import { changeSongDetailAction } from '../../../../../../components/content/playCoin/store/actionCreators';

import { IArtist } from '../../../../../../constant/artist';
import { ISong } from '../../../../../../constant/song';
import placeholder from '../../../../../../assets/img/holder/music-placeholder.png';

const RecSong: FC<RouteComponentProps> = (props): ReactElement => {
  const [recSong, setRecSong] = useState<ISong[]>([]);
  useEffect(() => {
    getRecSong<ISong[]>(0, 8).then((data) => {
      setRecSong(data);
    });
  }, []);
  //redux-hook
  const dispatch = useDispatch();
  const playSong = (item: ISong) => {
    dispatch(changeSongDetailAction(item.id));
  };
  const artistRouter = (item: IArtist) => {
    props.history.push({
      pathname: '/Home/artistDetail',
      state: {
        id: item.id
      }
    });
  };
  return (
    <Spin size={'large'} tip={'加载中...'} spinning={recSong.length === 0} style={{ backgroundColor: '#fef9f9' }}>
      <RecSongWrapper style={{ height: recSong.length === 0 ? '300px' : 'auto' }}>
        <ul className="song-list">
          {recSong.length !== 0 &&
            recSong.map((item, index) => {
              return (
                <li key={item.id}>
                  <ListInfo
                    img={
                      <Image
                        width={60}
                        height={60}
                        src={item.album.coverUrl + '&w=60'}
                        preview={false}
                        onClick={(e: MouseEvent<HTMLDivElement>) => playSong(item)}
                        fallback={placeholder}
                        placeholder={<Image preview={false} src={placeholder} width={60} height={60} />}
                      />
                    }
                    state={
                      <div className="state-outer">
                        <span className="text-nowrap state-span">{item.name}</span>
                      </div>
                    }
                    creator={item.artist.name}
                    imgWidth="60px"
                    onClick={() => artistRouter(item.artist)}
                  />
                  <div className="hot">
                    <i className="iconfont icon-redu"> </i>
                    {item.playCount}
                  </div>
                </li>
              );
            })}
        </ul>
      </RecSongWrapper>
    </Spin>
  );
};
export default withRouter(memo(RecSong));

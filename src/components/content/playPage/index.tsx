import React, { memo, FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Map } from 'immutable';

import { PlayPageWrapper, CenterContent } from './style';

import { cancelFavorite, setUserFavorite } from '../../../network/user';
import { getAllComment, publishComment } from '../../../network/comment';
import { downloadSong } from '../../../network/song';

import Reply from '../../common/reply';
import Comment from '../../common/comment';

import { changeUserDetailAction } from '../../../views/Login/store/actionCreators';

import { ILogin, IUserDetail } from '../../../constant/store/login';
import { IComment } from '../../../constant/comment';
import { ISongStore } from '../../../constant/store/song';

const PlayPage: FC<RouteComponentProps> = memo((props): ReactElement => {
  const [comment, setComment] = useState<IComment[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { songDetail, lyric, currentLyricIndex } = useSelector<Map<string, ISongStore>, ISongStore>((state) => {
    return state.getIn(['songReducer', 'song']);
  });
  const { userDetail } = useSelector<Map<string, ILogin>, { userDetail: IUserDetail }>((state) => ({
    userDetail: state.getIn(['loginReducer', 'login', 'userDetail'])
  }));
  const playType = useSelector<Map<string, number>, number>((state) => {
    return state.getIn(['playModeTypeReducer', 'playType']);
  });
  const dispatch = useDispatch();
  //获取所有评论
  useEffect(() => {
    let id = 'songId';
    if (playType === 1) {
      id = 'cId';
    }
    getAllComment(songDetail.id, id, 0, 30).then((data: any) => {
      setComment(data.comments);
      setTotal(data.count);
    });
  }, [songDetail.id, playType]);

  const albumRouter = () => {
    if (playType === 0) {
      props.history.push({
        pathname: '/Home/albumDetail',
        state: {
          id: songDetail.album.id
        }
      });
    }
  };
  const artistRouter = () => {
    if (playType === 0) {
      props.history.push({
        pathname: '/Home/artistDetail',
        state: {
          id: songDetail.artist.id
        }
      });
    } else if (playType === 1) {
      props.history.push({
        pathname: '/Home/userDetail',
        state: {
          userId: songDetail.user.userId
        }
      });
    }
  };
  //用户喜欢歌曲
  const loveClick = () => {
    if (!isLove()) {
      setUserFavorite(songDetail.id).then((data: any) => {
        dispatch(changeUserDetailAction());
      });
    } else {
      cancelFavorite(songDetail.id).then((data: any) => {
        dispatch(changeUserDetailAction());
      });
    }
  };
  //发布
  const publish = (content: string): void => {
    if (content.trim().length !== 0 && songDetail.id) {
      if (playType === 0) {
        publishComment(content, 'songId', songDetail.id).then((data) => {
          getAllComment(songDetail.id, 'songId', 0, 30).then((data: any) => {
            setComment(data.comments);
            setTotal(data.count);
          });
        });
      } else if (playType === 1) {
        publishComment(content, 'cId', songDetail.id).then((data) => {
          getAllComment(songDetail.id, 'cId', 0, 30).then((data: any) => {
            setComment(data.comments);
            setTotal(data.count);
          });
        });
      }
    }
  };
  //回复
  const reply = () => {
    if (playType === 0) {
      getAllComment(songDetail.id, 'songId', 0, 30).then((data: any) => {
        setComment(data.comments);
        setTotal(data.count);
      });
    } else if (playType === 1) {
      getAllComment(songDetail.id, 'cId', 0, 30).then((data: any) => {
        setComment(data.comments);
        setTotal(data.count);
      });
    }
  };
  const isLove = (): boolean => {
    const index = userDetail.love.findIndex((item: { songId: string }, index: number) => {
      return item.songId === songDetail.id;
    });
    return index !== -1;
  };
  const download = () => {
    downloadSong(songDetail.id, songDetail.name);
  };
  return (
    <PlayPageWrapper>
      <CenterContent>
        <div className="play">
          <div className="play-album">
            <div className="rotate-album">
              <img src={songDetail.album ? songDetail.album.coverUrl : ''} alt="cover" />
            </div>
            <div className="control-btn">
              <ul>
                <li onClick={(e) => loveClick()}>
                  {!isLove() && <i className="iconfont icon-love"> </i>}
                  {isLove() && (
                    <i className="iconfont icon-loveit" style={{ color: '#ec4141' }}>
                      {' '}
                    </i>
                  )}
                </li>
                <li onClick={(e) => download()}>
                  <i className="iconfont icon-download"> </i>
                </li>
              </ul>
            </div>
          </div>
          <div className="song-msg">
            <div className="song-name">{songDetail.name}</div>
            <ul>
              <li className="album-name text-nowrap">
                专辑:
                <span onClick={(e) => albumRouter()}>{songDetail.album ? songDetail.album.name : ''}</span>
              </li>
              <li className="artist-name text-nowrap">
                歌手:
                <span onClick={(e) => artistRouter()}>
                  {songDetail.artist ? songDetail.artist.name : songDetail.user.userName}
                </span>
              </li>
            </ul>
            <div className="lyric">
              <ul>
                {lyric &&
                  lyric !== '暂无歌词' &&
                  Array.isArray(lyric) &&
                  lyric.map((item: any, index: number) => {
                    return (
                      <li key={item.duration} className={index === currentLyricIndex ? 'active' : ''}>
                        {item.content}
                      </li>
                    );
                  })}
              </ul>
              {lyric === '暂无歌词' ? <span className="no-tip">{lyric}</span> : ''}
            </div>
          </div>
        </div>
        {/*评论信息*/}
        <div className="play-content">
          <div className="play-left">
            <p className="comment-title">歌曲评论</p>
            <Reply isShowPublish={true} isShowBtn={false} onClick={(content: string) => publish(content)} />
            <br />
            <Comment comments={comment} onClick={() => reply()} isPage={true} total={total} />
          </div>
        </div>
      </CenterContent>
    </PlayPageWrapper>
  );
});
export default withRouter(PlayPage);

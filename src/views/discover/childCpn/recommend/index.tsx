import React, { memo, FC, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import RecAlbum from './childCpn/recAlbum';
import RecArtist from './childCpn/recArtist';
import RecSong from './childCpn/recSong';
import Banner from './childCpn/banner';
import { RecommendWrapper, LeftContent } from './style';

interface IProps extends RouteComponentProps {}

const Recommend: FC<IProps> = (props): ReactElement => {
  const albumRouter = (): void => {
    props.history.push({
      pathname: '/Home/discover/album'
    });
  };
  const artistRouter = (): void => {
    props.history.push({
      pathname: '/Home/discover/artist'
    });
  };
  return (
    <RecommendWrapper>
      <Banner />
      <div className="rec-content">
        <LeftContent>
          <div className="title-name" onClick={(e) => albumRouter()}>
            最热专辑
            <i className="iconfont icon-arrow-right"> </i>
          </div>
          <RecAlbum />
          <div className="title-name" onClick={(e) => artistRouter()}>
            热门歌手
            <i className="iconfont icon-arrow-right"> </i>
          </div>
          <RecArtist />
          <div className="title-name">
            新歌上架
            <i className="iconfont icon-arrow-right"> </i>
          </div>
          <RecSong />
        </LeftContent>
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);

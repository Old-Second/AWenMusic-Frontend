import React, { memo, FC, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MyMusicWrapper } from './style';

interface Iprops extends RouteComponentProps {
  route: any;
}

const MyMusic: FC<Iprops> = (): ReactElement => {
  return (
    <MyMusicWrapper>
      <div className="my-music-list-outer"></div>
    </MyMusicWrapper>
  );
};
export default memo(MyMusic);

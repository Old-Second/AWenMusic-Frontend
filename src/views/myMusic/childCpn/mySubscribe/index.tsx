import React, { memo, FC, ReactElement } from 'react';

import TabControl from '../../../../components/common/tabControl';
import Album from './childCpn/album';
import Artist from './childCpn/artist';
import Playlist from './childCpn/playlist';
import Video from './childCpn/video';
import Channel from './childCpn/channel';

const MySubscribe: FC = (): ReactElement => {
  return (
    <div style={{ padding: '20px' }}>
      {
        <TabControl
          list={['专辑', '歌手']}
          contentName={['albums', 'artists']}
          albums={<Album />}
          artists={<Artist />}
          // @ts-ignore
          // playlists={<Playlist />}
          // videos={<Video />}
          // channel={<Channel />}
        />
      }
    </div>
  );
};
export default memo(MySubscribe);

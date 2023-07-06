import React, { memo, FC, ReactElement } from 'react';

import TabControl from '../../../../components/common/tabControl';
import Album from './childCpn/album';
import Artist from './childCpn/artist';

const MySubscribe: FC = (): ReactElement => {
  return (
    <div style={{ padding: '20px' }}>
      {
        <TabControl
          list={['专辑', '歌手']}
          contentName={['albums', 'artists']}
          albums={<Album />}
          artists={<Artist />}
        />
      }
    </div>
  );
};
export default memo(MySubscribe);

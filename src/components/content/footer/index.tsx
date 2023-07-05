import React, { FC, memo, ReactElement } from 'react';
import { FooterWrapper } from './style';

const Footer: FC = (): ReactElement => {
  return <FooterWrapper>&copy;AWen Music</FooterWrapper>;
};
export default memo(Footer);

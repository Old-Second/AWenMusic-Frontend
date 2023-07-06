import React, { memo, FC, ReactElement } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserInoWrapper } from './styled';
import { useDispatch } from 'react-redux';
import { changeUserMsg, logoutAction } from '../../../../../../../views/Login/store/actionCreators';

interface IProps extends RouteComponentProps {
  onClick: () => void;
}

const UserInfo: FC<IProps> = memo((props): ReactElement => {
  const { onClick } = props;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
    dispatch(
      changeUserMsg({
        token: '',
        userName: '',
        userId: '',
        avatarUrl: '',
        createTime: '',
        updateTime: '',
        manage: -1,
        auth: -1
      })
    );
    props.history.push({
      pathname: '/Login'
    });
  };
  const infoClick = () => {
    onClick();
  };
  return (
    <UserInoWrapper>
      <div className="user-info" onClick={(e) => infoClick()}>
        <i className="iconfont icon-yonghuxinxi"> </i>
        用户信息
      </div>
      <div className="exit" onClick={(e) => logout()}>
        <i className="iconfont icon-exit"> </i>
        退出登陆
      </div>
    </UserInoWrapper>
  );
});
export default withRouter(UserInfo);

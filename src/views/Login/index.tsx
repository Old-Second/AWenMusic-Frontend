import React, { memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
//组件
import LoginCpn from '../../components/content/loginCpn';
//样式
import { LoginWrapper } from './style';
//action
import { loginAction } from './store/actionCreators';
import Bgc from './childCpn/bgc';

const Login: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch();
  const verifyRef = useRef<any>();
  const login = (userName: string, password: string) => {
    endClick(true, userName, password);
  };
  const endClick = (isSuccess: boolean, username: string, pwd: string) => {
    if (isSuccess) {
      setTimeout(() => {
        try {
          dispatch(loginAction(username, pwd, props));
        } catch (e) {
          console.log(e);
        }
      }, 400);
    } else {
      verifyRef.current?.reload();
    }
  };
  const register = () => {
    props.history.push({
      pathname: '/Register'
    });
  };
  return (
    <LoginWrapper>
      <Bgc />
      <div className="mask"></div>
      <div className="login-outer">
        <LoginCpn
          btn={<button className="login-btn">登录</button>}
          isShow={true}
          onClick={(userName: string, password: string) => login(userName, password)}
          regClick={(e: any) => register()}
        />
      </div>
    </LoginWrapper>
  );
};
export default withRouter(memo(Login));

import React, { FormEvent, memo, MouseEvent, useEffect, useState, useRef } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
//样式
import { TopBarWrapper, CenterContent } from './style';
import logo from '../../../assets/img/logo.png';
import UserMsg from './childCpn/userMsg';
import SearchMatch from './childCpn/searchMatch';

const TopBar: React.FC<RouteComponentProps> = (props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const topRef = useRef<HTMLDivElement>(null);
  const homeRouter = () => {
    props.history.push({
      pathname: '/Home/discover/recommend'
    });
  };
  const searchFocus = (): void => {
    setIsShow(true);
  };
  const searchClick = (e: MouseEvent<HTMLInputElement>): void => {
    e.stopPropagation();
  };
  const searchInp = (e: FormEvent<HTMLInputElement>): void => {
    setKeyword(e.currentTarget.value);
  };
  useEffect(() => {
    document.addEventListener('click', changeShowFn);
  }, []);
  const changeShowFn = () => {
    setIsShow(false);
  };
  useEffect(() => {
    return () => {
      document.removeEventListener('click', changeShowFn);
    };
  }, []);
  const searchRouter = (): void => {
    if (keyword.trim().length !== 0) {
      props.history.push({
        pathname: '/Home/searchDetail'
      });
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', pageScroll);
  }, []);
  const pageScroll = () => {
    if (window.pageYOffset > 900) {
      if (topRef && topRef.current) {
        topRef.current.style.position = 'fixed';
      }
    } else {
      if (topRef && topRef.current) {
        topRef.current.style.position = 'static';
      }
    }
  };
  return (
    <TopBarWrapper ref={topRef}>
      <CenterContent>
        <div className="left-content">
          <div className="logo" onClick={(e: MouseEvent<HTMLDivElement>) => homeRouter()}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="search-outer">
          <input
            type="text"
            placeholder="搜索"
            onFocus={(e) => searchFocus()}
            onClick={(e) => searchClick(e)}
            onInput={(e) => searchInp(e)}
          />
          <button onClick={(e) => searchRouter()}>
            <i className="iconfont icon-search"> </i>
          </button>
          <CSSTransition in={isShow} timeout={1000} classNames="search" unmountOnExit={true}>
            <SearchMatch keyword={keyword} />
          </CSSTransition>
        </div>
        <div className="right-content">
          <div className="user">
            <UserMsg />
          </div>
        </div>
      </CenterContent>
    </TopBarWrapper>
  );
};
export default withRouter(memo(TopBar));

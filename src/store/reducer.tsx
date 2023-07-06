import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../views/Login/store/index';
import { reducer as songReducer } from '../components/content/playCoin/store/index';
import { reducer as searchReducer } from '../components/content/topBar/childCpn/searchMatch/store/index';
import { reducer as toastReducer } from '../components/common/toast/store/index';
import { reducer as playModeTypeReducer } from './playType/index';

const reducer = combineReducers({
  loginReducer,
  songReducer,
  searchReducer,
  toastReducer,
  playModeTypeReducer
});
export default reducer;

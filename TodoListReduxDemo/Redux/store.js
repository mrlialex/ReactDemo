import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import totalReducer from './totalReducer';

let store;

/**
 * 调用devtools工具，combineReducers用来统一归口reducer
 */

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  console.log('devTool not works');
  store = createStore(
    combineReducers(totalReducer),
    applyMiddleware(thunk)
  );
} else {
  console.log('devTool works');
  store = createStore(
    combineReducers(totalReducer),
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
  );
}

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';


import fatherRedux from './fatherRedux';
import sonRedux from './sonRedux';

let store,
    TotalStore = {fatherRedux, sonRedux};

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__) ) {
  store = createStore (
    combineReducers( TotalStore ),
    applyMiddleware( thunk )
  );
} else {
  store = createStore(
    combineReducers(TotalStore),
    //compose 做的只是让你不使用深度右括号的情况下来写深度嵌套的函数。
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}


export default store;
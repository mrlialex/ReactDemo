/**
 * 处理action，不改变原有state，只反回新的值
 */

import * as Types from './actionTypes';

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case Types.ADD_LIST:
     return [
       ...state,
       action.data
     ];
    case Types.REMOVE_LIST:
      return state.filter( item => {
        return item.index !== action.data.index
      });
    default:
    return state;
  }
}
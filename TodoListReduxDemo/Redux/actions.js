/*
主要是写出动作，处理动作放入reducer中处理
*/

import * as Types from './actionTypes';

let initIndex = 0
export const add = function (msg) {
  return {
    type: Types.ADD_LIST,
    data: {
      index: initIndex++,
      msg: msg
    }
  };
};

export const remove = function (index) {
  return {
    type: Types.REMOVE_LIST,
    data: {
      index: index
    }
  };
};
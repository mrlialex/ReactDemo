import * as reducerType from '../utils/ReduxType';

export const increase = function (data) {
  return {
    type: reducerType.INCREASE,
    data: data + 1
  }
};

export const decrease = function (data) {
  return {
    type: reducerType.DECREASE,
    data: data - 1
  }
};
import * as Types from '../utils/ReduxType';
import Immutable from 'immutable';

let index = 0;
let initalState = Immutable.Map({
  id: 0,
  desc: '今天去相亲'
});

export default (state = initalState, action) => {
  switch (action.type) {
    case Types.INCREASE:
      return Immutable.Map({
        data: action.data
      });
    case Types.DECREASE:
      return Immutable.Map({
        data: action.data
      });
    default:
      return state;
  }
}
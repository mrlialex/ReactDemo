import * as Types from '../utils/ReduxType';
import Immutable from 'immutable';

const initalState = Immutable.Map({
  data: 0
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
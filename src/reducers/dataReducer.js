import {handleActions} from 'redux-actions';
import {
    handleLoading,
    data,
    handleDataError,
} from '../actions/getData';

const defaultState = {
  data: {},
  loading: false,
};
export default handleActions(
  {
    [handleLoading]: (state, action) => {
      return Object.assign({}, state, {loading: true});
    },
    [data]: (state, action) => {
      return Object.assign({}, state, {
        data: action.payload,
        loading: false,
      });
    },
    [handleDataError]: (state, action) => {
      return Object.assign({}, state, {data: action.payload});
    }
  },
  defaultState,
);
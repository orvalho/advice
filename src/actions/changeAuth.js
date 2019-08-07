import {CHANGE_AUTH} from './types';

export default isSignedIn => async dispatch => {
  dispatch({type: CHANGE_AUTH, payload: isSignedIn});
};

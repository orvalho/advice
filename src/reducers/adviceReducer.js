import {ADD_ADVICE} from '../actions/types';

const INITIAL_STATE = ['if you swim with a friend - the chances of getting eaten by a shark will drop by 50%', 'borrow money from a pessimist - they don\'t expect it back', 'if you can\'t blind them with brilliance, baffle them with bullshit', 'never go to bed angry. Stay up and fight all night'];

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ADVICE:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

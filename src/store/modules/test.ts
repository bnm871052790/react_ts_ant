import { SET_TEST_NAME } from '../actions';

function testReducer(state = { name: 'majian' }, action: any) {
  switch (action.type) {
    case SET_TEST_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}

export default testReducer;

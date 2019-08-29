export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      state = {
        ...state,
        sample: action.payload,
      };
      break;

    default:
      break;
  }

  return state;
};
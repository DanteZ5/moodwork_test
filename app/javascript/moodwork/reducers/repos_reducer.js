export default function reposReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_REPOS':
      return action.payload;
    default: {
      return state;
    }
  }
}

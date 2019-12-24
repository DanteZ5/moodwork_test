export default function reposReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_REPOS':
      action.payload.sort(function(a, b){return b.watchers - a.watchers});
      return action.payload;
    case 'FETCH_REPOS_ERROR':
      return [{id: 0, name: action.payload}]
    default: {
      return state;
    }
  }
}

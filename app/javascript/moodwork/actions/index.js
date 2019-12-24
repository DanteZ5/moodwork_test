import ReduxThunk from 'redux-thunk';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
export const FETCH_AVATAR = 'FETCH_AVATAR';

export function fetchRepos(githubUser) {
  const url = `https://api.github.com/users/${githubUser}/repos`;
  const avatar = `https://avatars.githubusercontent.com/${githubUser}`;
  return dispatch => {
    fetch(url, { credentials: "same-origin" }).then(r => {
      if (r.ok) {
        dispatch({type: FETCH_AVATAR, payload: avatar})
        dispatch({type: FETCH_REPOS, payload: r.json()});
      } else {
        dispatch({type: FETCH_REPOS_ERROR, payload: r.statusText });
      }
    })
  }
}



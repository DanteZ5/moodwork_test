export const FETCH_REPOS = 'FETCH_REPOS';

export function fetchRepos(githubuser) {
  const url = `https://api.github.com/users/${githubUser}`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: 'FETCH_REPOS',
    payload: promise
  }
}

export default function avatarReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_AVATAR':
      return action.payload;
    case 'FETCH_REPOS_ERROR':
      return "https://i.pinimg.com/originals/06/cb/1f/06cb1f6054c686a31fadfb621468a68c.png"
    default: {
      return state;
    }
  }
}

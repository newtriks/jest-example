// API Request
const api = {
  fetchUsers: function() {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve()
      );
    });
  }
}

export const success = () => (
  {
    type: 'FETCH_USERS_SUCCESS'
  }
);

export const fetchUsers = () => {
  return dispatch => {
    return api.fetchUsers('/users.json')
      .then(() => dispatch(success()))
  };
}
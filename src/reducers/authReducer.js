const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuth: action.payload.user ? true : false,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export { authReducer };

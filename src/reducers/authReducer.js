const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuth: !!action.payload,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };

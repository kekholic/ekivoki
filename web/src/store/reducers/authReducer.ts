/* eslint-disable default-param-last */
import authType from '../types/authTypes';

const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case authType.USER_AUTH:
      window.localStorage.setItem(
        'token',
        action.payload.accessToken,
      );

      return action.payload.user;

    case authType.USER_LOGOUT:
      window.localStorage.removeItem('token');
      return {};

    case authType.USER_CHECKAUTH:
      window.localStorage.setItem(
        'token',
        action.payload.accessToken,
      );

      return action.payload.user;

    default:
      return state;
  }
};

export default authReducer;

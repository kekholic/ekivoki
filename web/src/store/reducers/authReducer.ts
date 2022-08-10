import authType from '../types/authTypes';

// interface IPayload {
//   accessToken: string,
//   user: any,
// }

// // MATRESHKA
// interface IAction {
//   type: string,
//   payload: {
//     accessToken: string,
//     user: any
//   },
// }

const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case authType.USER_AUTH_SUCCES:
      window.localStorage.setItem(
        'token',
        action.payload.accessToken,
      );

      return action.payload.user;

    case authType.USER_LOGOUT_SUCCES:
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

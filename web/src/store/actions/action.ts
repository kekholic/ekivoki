import $api from '../../http';
import authType from '../types/authTypes';

const action = {
  authUser: (data: any) => async (dispatch: any) => {
    const response = await $api
      .post(`/auth/${data.username ? 'registration' : 'login'}`, data);
    dispatch(action.authUserSucces(response.data));
  },

  logoutUser: () => async (dispatch: any) => {
    await $api
      .post('/auth/logout');
    dispatch(action.logoutUserSucces());
  },

  authUserSucces: (payload: any) => ({ type: authType.USER_AUTH_SUCCES, payload }),
  logoutUserSucces: () => ({ type: authType.USER_LOGOUT_SUCCES }),
};

export default action;

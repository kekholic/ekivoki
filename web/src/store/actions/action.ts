import $api from '../../http';
import authType from '../types/authTypes';

const action = {
  authUser: (data: any) => async (dispatch: any) => {
    const response = await $api
      .post(`/auth/${data.username ? 'registration' : 'login'}`, data);
    dispatch(action.authUserSucces(response.data));
    // dispatch(authAndLoginUser(data));
    // dispatch(setIsAuth());
    // dispatch(setIsLoading(false));
    // navigate('/home', { replace: true });
    // )
    // .catch((error) => {
    //   dispatch(
    //     getError({
    //       status: error.response.status,
    //       error: error.response.data.message,
    //     }),
    //   );
    //   dispatch(setIsLoading(false));
    //   navigate('/error', { replace: true });
    // });
  },
  authUserSucces: (payload: any) => ({ type: authType.USER_AUTH, payload }),
};

export default action;

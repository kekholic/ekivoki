import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './reducers/authReducer';
import authSlice from './reducers/authSlice';

const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export default store;

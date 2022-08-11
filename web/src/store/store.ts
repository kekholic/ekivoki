import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import authReducer from './reducers/authReducer';
import authSlice from './reducers/authSlice';

const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

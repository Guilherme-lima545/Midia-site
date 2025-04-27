import { combineReducers, configureStore } from '@reduxjs/toolkit';
import slide from '../Redux/slideReducer';

const reducer = combineReducers({ slide });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});

export default store;

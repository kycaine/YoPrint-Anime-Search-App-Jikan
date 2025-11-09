import { configureStore } from '@reduxjs/toolkit';
import animeSearchReducer from '../features/animeSearch/animeSearchSlice';
import animeDetailReducer from '../features/animeDetail/animeDetailSlice';

export const store = configureStore({
  reducer: {
    animeSearch: animeSearchReducer,
    animeDetail: animeDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

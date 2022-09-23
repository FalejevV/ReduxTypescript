import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice";
import passwordGeneratorReducer from "../features/passwordGenerator.slice";
import countriesSlice from '../features/countries.slice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    passwordGenerator: passwordGeneratorReducer,
    countries: countriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

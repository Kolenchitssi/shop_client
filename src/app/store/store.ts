import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import userReducer, { userSliceActions } from "../../features/user/userSlice";
import * as userSliceAsyncActions from "../../features/user/userActionCreator";
import deviceReducer, {
  deviceSliceActions,
} from "../../features/device/deviceSlice";

//! ЕСЛИ НЕСКОЛЬКО РЕДЮСЕРОВ можно испрльзовать combineReducers
//** но не обязательно можно  сразу в объект как ниже,
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
//   device: deviceReducer,
// });
// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    device: deviceReducer,
  },
});
export const rootActions = {
  ...userSliceActions,
  ...userSliceAsyncActions,
  ...deviceSliceActions,
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


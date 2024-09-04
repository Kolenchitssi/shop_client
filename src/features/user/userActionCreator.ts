import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { $authHost, $host } from "app/http/hostInit";
import jwt_decode from "jwt-decode";

import { AppDispatch } from "app/store/store";

import axios from "axios";
import { userSlice } from "./userSlice";
import { IUser, IRegistrationPayload, ILoginPayload } from "./user.models";

//! (*1) смотри комент userSlice
//это было в видео для объяснения работы но  см ниже как надо
// export const registration2 =
//   async (email: string, password: string, role: string = "USER") =>
//   async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.userRegistrationFetching());
//       const response = await $host.post("api/user/registration", {
//         email,
//         password,
//         role,
//       });
//       const { data } = response;
//       localStorage.setItem("token", data.token);
//       const userInfo = jwt_decode(data.token) as IUser; // из токенa получим инфу о пользователе
//       dispatch(userSlice.actions.userRegistrationSuccess(userInfo));
//       return userInfo;
//     } catch (error) {}
//   };

export const registration = createAsyncThunk(
  "user/registration",
  async (payload: IRegistrationPayload, thunkAPI) => {
    const { email, password, role = "USER" } = payload;
    try {
      const response = await $host.post("api/user/registration", {
        email,
        password,
        role,
      });
      const { data } = response;
      localStorage.setItem("token", data.token);
      const userInfo = jwt_decode(data.token) as IUser; // из токенa получим инфу о пользователе
      return userInfo;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка регистрации!");
    }
  }
);

// export const login =
//   (email: string, password: string) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.userAutorizationFetching());
//       const response = await $host.post("api/user/login", {
//         email,
//         password,
//       });
//       console.log("login response", response);

//       const { data } = response;
//       localStorage.setItem("token", data.token);
//       const userInfo = jwt_decode(data.token) as IUser; // из токенa получим инфу о пользователе
//       dispatch(userSlice.actions.userAutorizationSuccess(userInfo));
//       return userInfo;
//     } catch (error: any) {
//       dispatch(userSlice.actions.userAutorizationError(error.message));
//     }
//   };

export const login = createAsyncThunk(
  "user/login",
  async (payload: ILoginPayload, thunkAPI) => {
    const { email, password } = payload;
    try {
      const response = await $host.post("api/user/login", {
        email,
        password,
      });
      console.log("login response", response);
      const { data } = response;
      localStorage.setItem("token", data.token);
      const userInfo = jwt_decode(data.token) as IUser; // из токенa получим инфу о пользователе
      return userInfo;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка авторизации!");
    }
  }
);

// export const check = async () => {
//   try {
//   } catch (error) {}
//   const { data } = await $authHost.get("api/user/auth");
//   localStorage.setItem("token", data.token);
//   return jwt_decode(data.token);
// };

//! createAsyncThunk<IUser> указываем что будет отдаватся IUser? 2й аргумент то что принимает
//    <Returned, ThunkArg = void>(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, CurriedThunkApiConfig>, options?: AsyncThunkOptions<ThunkArg, CurriedThunkApiConfig>): AsyncThunk<Returned, ThunkArg, CurriedThunkApiConfig>;

//** typePrefix - каждое должно быть уникальным user/remove, user/registration

export const check = createAsyncThunk<IUser>(
  "user/check",
  async (_, thunkAPI) => {
    try {
      const { data } = await $authHost.get("api/user/auth");
      localStorage.setItem("token", data.token);
      return jwt_decode(data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка проверки авторизации!");
    }
  }
);

//! check remove user
export const removeUser = createAsyncThunk(
  "user/remove",
  async (payload: IRegistrationPayload, thunkAPI) => {
    const { email, password, role = "USER" } = payload;
    try {
      const response = await $host.post("api/user/remove", {
        email,
        password,
        role,
      });
      const { data } = response;
      localStorage.setItem("token", data.token);
      const userInfo = jwt_decode(data.token) as IUser; // из токенa получим инфу о пользователе
      return userInfo;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка удаления пользователя!");
    }
  }
);

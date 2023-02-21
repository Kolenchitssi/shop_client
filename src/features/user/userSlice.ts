import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store/store";
import { IUser } from "./user.models";
import { registration } from "./userActionCreator";

export interface IUserState {
  user: IUser;
  isUserAuth: boolean;
  isUserLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {} as IUser,
  isUserAuth: false,
  isUserLoading: false,
  error: "",
};

// Приведенная ниже функция называется thunk и позволяет нам выполнять асинхронную логику. Это
// можно отправить как обычное действие: `dispatch(incrementAsync(10))`. Этот
// вызовет преобразователь с функцией `dispatch` в качестве первого аргумента. Асинхронный
// затем код может быть выполнен и другие действия могут быть отправлены. Преобразователи
// обычно используется для выполнения асинхронных запросов.

/* export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // Возвращаемое нами значение становится полезной нагрузкой «выполненного» действия.
    return response.data;
  }
); */

export const userSlice = createSlice({
  name: "user",
  initialState,

  // Поле `reducers` позволяет нам определять редьюсеры и генерировать связанные действия
  // Redux Toolkit позволяет нам писать «мутирующую» логику в редюсерах. Это
  // на самом деле не мутирует состояние, потому что использует библиотеку Immer,
  // который обнаруживает изменения в "состоянии черновика" и создает совершенно новый
  // неизменное состояние, основанное на этих изменениях
  // Используйте тип PayloadAction для объявления содержимого `action.payload`
  reducers: {
    // Autorization
    userAutorizationFetching: (state) => {
      state.isUserLoading = true;
    },
    userAutorizationSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isUserLoading = false;
      state.isUserAuth = true;
      state.error = "";
    },
    userAutorizationError: (state, action: PayloadAction<string>) => {
      state.isUserLoading = false;
      state.isUserAuth = false;
      state.error = action.payload;
    },

    // Registration
    userRegistrationFetching: (state) => {
      state.isUserLoading = true;
    },
    userRegistrationSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isUserLoading = false;
      state.isUserAuth = true;
      state.error = "";
    },
    userRegistrationError: (state, action: PayloadAction<string>) => {
      state.isUserLoading = false;
      state.isUserAuth = false;
      state.error = action.payload;
    },
    // Chek user
    //todo add userRemove

    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isUserAuth = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserLoading = action.payload;
    },
  },

  // Поле `extraReducers` позволяет срезу обрабатывать действия, определенные в другом месте,
  // включая действия, сгенерированные createAsyncThunk или другими слайсами.
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(
        registration.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.isUserLoading = false;
          state.isUserAuth = true;
          state.error = "";
        }
      )
      .addCase(registration.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserAuth = false;
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = "Unknow error registration";
        }
      });
  },
});

export const { setUser, setIsAuth, setIsLoading } = userSlice.actions;

export default userSlice.reducer;

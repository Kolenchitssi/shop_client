import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store/store";
import { IUser } from "./user.models";
import { check, login, registration } from "./userActionCreator";

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
    //! это нужно только для закоментированного варианта в UserActionCreator (*1)
    //** */ мы будем использовать как в  extraReducers
    // тоесть веьэтот код ненужен он толко как пример

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
    //todo add userRemove
    // Chek user

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
      }) //login
      .addCase(login.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isUserLoading = false;
        state.isUserAuth = true;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserAuth = false;
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = "Unknow error login";
        }
      }) //Check user
      .addCase(check.pending, (state) => {
        state.isUserLoading = true;
      }) //в userActionCreator указываем что  он будет отдавать  check = createAsyncThunk<IUser>
      .addCase(check.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isUserLoading = false;
        state.isUserAuth = true;
        state.error = "";
      })
      .addCase(check.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserAuth = false;
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = "Unknow error login";
        }
      });
  },
});

export const { setUser, setIsAuth, setIsLoading } = userSlice.actions;

// так более удобно и не вызовит путаницы с именами
export const { actions: userSliceActions, reducer: userSliceReducer } =
  userSlice;

export default userSlice.reducer;

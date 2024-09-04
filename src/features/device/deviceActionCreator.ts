import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { $authHost, $host } from "app/http/hostInit";

interface ICreateTypePayload {
  type: string;
  [key: string]: any;
}

interface IFetchDevisesPayload {
  typeId: string;
  brandId: string;
  page: number;
  limit: number;
}

export const createType = createAsyncThunk(
  "device/createType",
  async (payload: ICreateTypePayload, thunkAPI) => {
    const { type } = payload;
    // функции что есть в thunkAPI
    const {
      abort,
      dispatch,
      fulfillWithValue,
      getState,
      rejectWithValue,
      extra,
      requestId,
      signal,
    } = thunkAPI;

    try {
      const response = await $authHost.post("api/type", type);
      const { data } = response;
      console.log("createType response", response);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка создания нового типа!");
    }
  }
);

export const fetchTypes = createAsyncThunk(
  "device/fetchTypes",
  async (_, thunkAPI) => {
    try {
      const { data } = await $host.get("api/type");
      console.log("fetchTypes response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка получения типов!");
    }
  }
);

export const createBrand = createAsyncThunk(
  "device/createBrand",
  async (brand, thunkAPI) => {
    try {
      const { data } = await $authHost.post("api/brand", brand);
      console.log("createBrand response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка создания брэнда!");
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "device/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await $host.get("api/brand");
      console.log("fetchBrands response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка получения brands!");
    }
  }
);

export const createDevice = createAsyncThunk(
  "device/createDevice",
  async (device, thunkAPI) => {
    try {
      const { data } = await $authHost.post("api/device", device);
      console.log("createDevice response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка создания device!");
    }
  }
);

export const fetchDevices = createAsyncThunk(
  "device/fetchDevices",
  async (payload: IFetchDevisesPayload, thunkAPI) => {
    const { typeId, brandId, page, limit = 5 } = payload;
    try {
      const { data } = await $host.get("api/device", {
        params: { typeId, brandId, page, limit },
      });
      console.log("fetchDevices response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка получения brands!");
    }
  }
);

export const fetchOneDevice = createAsyncThunk(
  "device/fetchOneDevice",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await $host.get("api/device/" + id);
      console.log("fetchOneDevice response", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Ошибка получения OneDevice!");
    }
  }
);

import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { type RootState, type AppDispatch, rootActions } from "../store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// в новом TS можно так(это равнозначно): const useAppDispatch =  useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppAction = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};


import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { basketReducer } from 'src/entities/basket';
import { goodsReducer } from 'src/entities/goods';

const store = configureStore({
	reducer: {
		goods: goodsReducer,
		basket: basketReducer
	}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
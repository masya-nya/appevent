import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GoodI } from 'src/entities/goods/lib/types';
import { BasketStoreI } from '../../lib/types';
import { BASKET_LS_KEY } from '../../lib/config';

const initialState: BasketStoreI = {
	basket: []
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		initialBasket: (state) => {
			const basketLocalStorage = JSON.parse(localStorage.getItem(BASKET_LS_KEY) || '[]')
			state.basket = basketLocalStorage;
		},
		addGood: (state, action: PayloadAction<GoodI>) => {
			state.basket.push(action.payload);
			const basketStringify = JSON.stringify(state.basket);
			localStorage.setItem(BASKET_LS_KEY, basketStringify)
		},
		removeGood: (state, action: PayloadAction<number>) => {
			state.basket = state.basket.filter(good => good.id !== action.payload)
			const basketStringify = JSON.stringify(state.basket);
			localStorage.setItem(BASKET_LS_KEY, basketStringify)
		},
	}
});

export const { addGood, removeGood, initialBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
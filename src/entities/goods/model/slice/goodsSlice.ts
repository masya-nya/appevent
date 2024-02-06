import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_GOODS_URL } from '../../lib/config';
import { GoodsStoreI } from '../../lib/types';

export const fetchGoods = createAsyncThunk(
	'goods/fetchGoods',
	async function() {
		const { data: { items } } = await axios.get(GET_GOODS_URL);

		return items;
	}
);
const initialState: GoodsStoreI = {
	goods: [],
	isLoading: false,
	error: null
}

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchGoods.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		}),
		builder.addCase(fetchGoods.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.goods = payload;
		}),
		builder.addCase(fetchGoods.rejected, () => {})
	}
});

export const {  } = goodsSlice.actions;

export const goodsReducer = goodsSlice.reducer;
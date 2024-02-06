export interface GoodI {
	id: number
	image: string
	name: string
	price: number
}

export interface GoodsStoreI {
	goods: GoodI[],
	isLoading: boolean,
	error: null | string
}
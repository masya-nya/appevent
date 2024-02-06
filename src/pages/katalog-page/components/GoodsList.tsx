import { CSSProperties, FC } from 'react';
import cl from './GoodsList.module.scss';
import { useAppSelector } from 'src/shared/model/store';
import { GoodsCard } from 'src/widgets/goods';

interface GoodsListProps {
	className?: string
	style?: CSSProperties
}

export const GoodsList:FC<GoodsListProps> = () => {
	const goods = useAppSelector(state => state.goods.goods)
	console.log(goods);
	return (
		<div className={cl['goods-list']}>
			{
				goods.map(good => 
					<GoodsCard good={good} key={good.id} />
				)
			}
		</div>
	);
};
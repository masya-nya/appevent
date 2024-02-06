import { CSSProperties, FC, useCallback } from 'react';
import cl from './BasketOrder.module.scss';
import { Button } from 'src/shared/ui';
import { useAppSelector } from 'src/shared/model/store';
import { pluralizeWord } from 'src/shared/lib/helpers';

interface BasketOrderProps {
	className?: string
	style?: CSSProperties
}

export const BasketOrder:FC<BasketOrderProps> = () => {
	const basketGoodsCount = useAppSelector(store => store.basket.basket.length);
	const basketGoodsAmount = useAppSelector(store => {
		return store.basket.basket.reduce((acc, curVal) => acc + curVal.price, 0)
	});
	
	const placeAnOrder = useCallback(() => {
		alert(`Вы оформили заказ на сумму ${basketGoodsAmount}, поздравляю`);
	}, [])

	return (
		<div className={cl['basket-order']}>
			<div className={cl['basket-order__info']}>
				Итого: { basketGoodsCount } { pluralizeWord(basketGoodsCount) } на сумму { basketGoodsAmount }&#8381;
			</div>
			<div className={cl['basket-order__ctrl']}>
				<Button
					type="accent"
					clickHandler={placeAnOrder}
					className={cl['basket-item__btn-remove']}
				>
					Оформить заказ
				</Button>
			</div>
		</div>
	);
};
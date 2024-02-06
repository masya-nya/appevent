import { CSSProperties, FC } from 'react';
import cl from './BasketPage.module.scss';
import { BasketList } from 'src/widgets/basket';

interface BasketPageProps {
	className?: string
	style?: CSSProperties
}

export const BasketPage:FC<BasketPageProps> = () => {
	return (
		<div className={cl['basket-page']}>
			<h2 className={cl['basket-page__title']}>
				Оформление заказа
			</h2>
			<BasketList className={cl['basket-page__list']} />
		</div>
	);
};
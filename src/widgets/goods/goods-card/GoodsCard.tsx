import { CSSProperties, FC, useCallback } from 'react';
import cl from './GoodsCard.module.scss';
import { Button } from 'src/shared/ui';
import { useAppDispatch, useAppSelector } from 'src/shared/model/store';
import { addGood } from 'src/entities/basket';
import { GoodI } from 'src/entities/goods';
import { useNavigate } from 'react-router-dom';
import { ROUTER_ROTES } from 'src/app/router/config';
const { BASKET } = ROUTER_ROTES;

interface GoodsCardProps {
	good: GoodI;
	className?: string;
	style?: CSSProperties;
}

export const GoodsCard: FC<GoodsCardProps> = ({ good }) => {
	const { image, name, price } = good;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const isInBasket = useAppSelector(state => {
		const isSearched = state.basket.basket.find(
			basketGood => basketGood.id === good.id
		);
		return Boolean(isSearched);
	});

	const goToOrder = useCallback(() => {
		navigate(BASKET);
	}, [BASKET])

	const addGoodToBasket = useCallback(() => {
		dispatch(addGood(good));
	}, [good]);

	return (
		<div className={cl['goods-card']}>
			<div className={cl['goods-card__info']}>
				<div className={cl['goods-card__image']}>
					<img src={image} alt={name} />
				</div>
				<div className={cl['goods-card__price']}>{price}&#8381;</div>
				<div className={cl['goods-card__name']}>{name}</div>
			</div>
			<div className={cl['goods-card__ctrl']}>
				{isInBasket ? (
					<Button
						type="accent"
						clickHandler={goToOrder}
						className={cl['goods-card__btn-order']}
					>
						Оформить заказ
					</Button>
				) : (
					<Button
						type="primary"
						clickHandler={addGoodToBasket}
						className={cl['goods-card__btn-buy']}
					>
						Добавить в корзину
					</Button>
				)}
			</div>
		</div>
	);
};

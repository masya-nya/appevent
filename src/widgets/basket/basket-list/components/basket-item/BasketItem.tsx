import { CSSProperties, FC, useCallback } from 'react';
import cl from './BasketItem.module.scss';
import { Button } from 'src/shared/ui';
import { useAppDispatch } from 'src/shared/model/store';
import { removeGood } from 'src/entities/basket';

interface BasketItemProps {
	idx: number;
	id: number;
	name: string;
	image: string;
	price: number;
	className?: string;
	style?: CSSProperties;
}

export const BasketItem: FC<BasketItemProps> = ({
	idx,
	id,
	image,
	name,
	price,
}) => {
	const dispatch = useAppDispatch();

	const removeGoodFromBasket = useCallback(() => {
		dispatch(removeGood(id))
	}, [])
	return (
		<div className={cl['basket-item']}>
			<div className={cl['basket-item__seq']}>{idx + 1}</div>
			<div className={cl['basket-item__img']}>
				<img src={image} alt={name} />
			</div>
			<div className={cl['basket-item__name']}>{name}</div>
			<div className={cl['basket-item__price']}>{price}&#8381;</div>
			<div className={cl['basket-item__ctrl']}>
				<Button
					type="danger"
					clickHandler={removeGoodFromBasket}
					className={cl['basket-item__btn-remove']}
				>
					Убрать
				</Button>
			</div>
		</div>
	);
};

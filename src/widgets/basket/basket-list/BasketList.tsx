import { CSSProperties, FC } from 'react';
import cl from './BasketList.module.scss';
import { useAppSelector } from 'src/shared/model/store';
import { BasketItem } from './components/basket-item/BasketItem';
import { BasketEmpty } from './components/basket-empty/BasketEmpty';
import cn from 'classnames';
import { BasketOrder } from './components/basket-order/BasketOrder';

interface BasketListProps {
	className?: string
	style?: CSSProperties
}

export const BasketList:FC<BasketListProps> = ({className, ...props}) => {
	const basketDoods = useAppSelector(store => store.basket.basket);

	return (
		<div {...props} className={ cn(cl['basket-list'], className)}>
			{
				basketDoods.length > 0
				? 
				<>
					{
						basketDoods.map(({ id, image, name, price }, idx) => 
							<BasketItem idx={idx} id={id} image={image} name={name} price={price} key={id} />
						)
					}
					<BasketOrder />
				</>
				: <BasketEmpty />
			}
		</div>
	);
};
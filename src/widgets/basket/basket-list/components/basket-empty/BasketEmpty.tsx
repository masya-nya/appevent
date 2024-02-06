import { CSSProperties, FC } from 'react';
import cl from './BasketEmpty.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTER_ROTES } from 'src/app/router/config';
const { KATALOG } = ROUTER_ROTES;

interface BasketEmptyProps {
	className?: string;
	style?: CSSProperties;
}

export const BasketEmpty: FC<BasketEmptyProps> = () => {
	const navigate = useNavigate();

	const moveToKatalog = () => {
		navigate(KATALOG);
	};

	return (
		<div className={cl['basket-empty']}>
			Корзина пуста, перейдите в{' '}
			<span onClick={moveToKatalog} className={cl['basket-empty--link']}>
				каталог
			</span>
			, чтобы выбрать товар.
		</div>
	);
};

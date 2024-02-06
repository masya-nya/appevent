import { CSSProperties, FC } from 'react';
import cl from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'src/shared/model/store';
import { ROUTER_ROTES } from 'src/app/router/config';
const { BASKET, KATALOG, ROOT } = ROUTER_ROTES;

interface NavigationProps {
	className?: string
	style?: CSSProperties
}

export const Navigation:FC<NavigationProps> = () => {
	const goodsInBasket = useAppSelector(store => store.basket.basket);

	return (
		<nav className={cl['navigation']}>
				<div className={cl['navigation__main']}>
					<NavLink className={cl['navigation__link']} to={ROOT}>
						Главная
					</NavLink>
					<NavLink className={cl['navigation__link']} to={KATALOG}>
						Каталог
					</NavLink>
				</div>
				<div className={cl['navigation__basket']}>
					<NavLink className={cl['navigation__link']} to={BASKET}>
						Корзина
						{goodsInBasket.length > 0 &&
							`(${goodsInBasket.length})`}
					</NavLink>
				</div>
			</nav>
	);
};
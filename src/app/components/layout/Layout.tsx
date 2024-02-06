import { CSSProperties, FC, useEffect } from 'react';
import cl from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { useAppDispatch } from 'src/shared/model/store';
import { initialBasket } from 'src/entities/basket/model/slice/basketSlice';


interface LayoutProps {
	className?: string
	style?: CSSProperties
}

export const Layout:FC<LayoutProps> = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(initialBasket())
	}, []);
	return (
		<div className={cl['layout']}>
			<Header />
			<main className={cl['layout__content']}>
				<Outlet />
			</main>
		</div>
	);
};
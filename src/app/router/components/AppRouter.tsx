import { Routes, Route } from 'react-router-dom';
import { ROUTER_ROTES } from '../config';
import { Layout } from 'src/app/components/layout';
import { KatalogPage } from 'src/pages/katalog-page/KatalogPage';
import { BasketPage } from 'src/pages/basket-page/BasketPage';
import { AboutPage } from 'src/pages/about-page/AboutPage';
const { ROOT, BASKET, KATALOG } = ROUTER_ROTES;

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={ROOT} element={<Layout />}>
				<Route index element={<AboutPage />} />
				<Route path={KATALOG} element={<KatalogPage />} />
				<Route path={BASKET} element={<BasketPage />} />
			</Route>
		</Routes>
	);
};

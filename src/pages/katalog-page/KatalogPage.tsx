import { CSSProperties, FC, useEffect } from 'react';
import cl from './KatalogPage.module.scss';
import { fetchGoods } from 'src/entities/goods';
import { useAppDispatch, useAppSelector } from 'src/shared/model/store';
import { GoodsList } from './components/GoodsList';
import { Loader } from 'src/shared/ui';

interface KatalogPageProps {
	className?: string
	style?: CSSProperties
}

export const KatalogPage:FC<KatalogPageProps> = () => {
	const dispatch = useAppDispatch();
	const goodsIsLoading = useAppSelector(store => store.goods.isLoading);

	useEffect(() => {
		dispatch(fetchGoods());
	}, [])

	return (
		<div className={cl['katalog-page']}>
			{
				goodsIsLoading
					? <Loader />
					: <GoodsList />
			}
		</div>
	);
};
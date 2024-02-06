import { CSSProperties, FC } from 'react';
import cl from './AboutPage.module.scss';

interface AboutPageProps {
	className?: string;
	style?: CSSProperties;
}

export const AboutPage: FC<AboutPageProps> = () => {
	return (
		<div className={cl['about-page']}>
			<h2 className={cl['about-page__title']}>
				Данное приложение было разработано для компании AppEvent
			</h2>
			<div className={cl['about-page__notes']}>
				<ul>
					<li>
						Сохранение полного объекта товара в LS не считаю правильным решением, грамотнее было бы
						сохранять только id и потом уже запросом к api с
						массивом id-шников получать всю нужную инфу, но в данной
						ситуации иного решения я не придумал или оно было хуже.
					</li>
					<li>
						Дизай самый базовый, для более привлекательной работы
						мне бы понадобилось чуть больше времени. Да и очень
						часто бывает так, что дизайн(цвета, стили компонентов и
						т.д.) для проекта я выбираю дольше, чем делаю сам
						проект, поэтому сильно углубляться не стал.
					</li>
					<li>
						C Redux до этого не работал, знал только принцип работы и теорию. Обычно использовал MobX.
					</li>
				</ul>
			</div>
		</div>
	);
};

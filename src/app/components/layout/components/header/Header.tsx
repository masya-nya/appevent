import { CSSProperties, FC } from 'react';
import cl from './Header.module.scss';
import { Navigation } from 'src/widgets/navigation';



interface HeaderProps {
	className?: string;
	style?: CSSProperties;
}

export const Header: FC<HeaderProps> = () => {
	return (
		<header className={cl['header']}>
			<Navigation />
		</header>
	);
};

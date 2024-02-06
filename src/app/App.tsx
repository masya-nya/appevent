import './styles/index.scss';
import { AppRouter } from './router';
import cn from 'classnames';

const App = () => {
	return (
		<div className={cn('app')}>
			<AppRouter />
		</div>
	);
};

export default App;

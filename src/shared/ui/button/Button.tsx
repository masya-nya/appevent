import React, { ButtonHTMLAttributes, FC } from 'react';
import cl from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	children: string,
	type: 'primary' | 'accent' | 'danger' | 'warning',
	clickHandler: (event?: React.SyntheticEvent) => void,
	style?: React.CSSProperties,
	className?: string,
}

export const Button: FC<ButtonProps> = ({ children, type, clickHandler, className, ...props }): React.JSX.Element => {
	return (
		<button
			onClick={(event) => clickHandler(event)}
			className={
				cn(
					cl['button'],
					cl[`button__${type}`],
					className
				)}
			{...props}
		>
			{children}
		</button>
	);
};
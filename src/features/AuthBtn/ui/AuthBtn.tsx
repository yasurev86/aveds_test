'use client';

import { FC, ButtonHTMLAttributes } from 'react';
import c from './AuthBtn.module.scss';
import clsx from 'clsx';
import { useAuth } from '@/app/providers/AuthProvider/hooks/useAuth';

type IProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;
const AuthBtn: FC<IProps> = ({ className, ...props }) => {
	const { isLogged } = useAuth();

	return (
		<button className={clsx(c.wrapper, className)} {...props}>
			<span>{isLogged ? 'Выйти' : 'Войти'}</span>
		</button>
	);
};

export default AuthBtn;

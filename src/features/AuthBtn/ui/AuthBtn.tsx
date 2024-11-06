'use client';

import { FC, ButtonHTMLAttributes } from 'react';
import c from './AuthBtn.module.scss';
import clsx from 'clsx';
import { useUserStore } from '@/entities/User';
import { useModalStore } from '@/shared/ui/Modal';

type IProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;
const AuthBtn: FC<IProps> = ({ className, ...props }) => {
	const isLogged = useUserStore(state => state.isLogged);
	const logOut = useUserStore(state => state.logOut);

	const openModal = useModalStore(state => state.open);
	const openLoginModal = () => openModal('login');

	const clickHandler = () => {
		if (isLogged) logOut();
		else openLoginModal();
	};

	return (
		<button
			className={clsx(c.wrapper, className)}
			{...props}
			onClick={clickHandler}
		>
			{isLogged ? 'Выйти' : 'Войти'}
		</button>
	);
};

export default AuthBtn;

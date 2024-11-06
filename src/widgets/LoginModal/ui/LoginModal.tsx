'use client';

import { FC } from 'react';
import c from './LoginModal.module.scss';
import clsx from 'clsx';
import Modal, { useModalStore } from '@/shared/ui/Modal';
import LoginForm from '@/features/LoginForm';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/entities/User';

type IProps = { className?: string };
const LoginModal: FC<IProps> = ({ className, ...props }) => {
	const isLogged = useUserStore(state => state.isLogged);
	const close = useModalStore(state => state.close);
	const { push } = useRouter();

	const successCallback = () => {
		push('/profile');
		close();
	};

	if (isLogged) return;

	return (
		<Modal
			name={'login'}
			caption={'Вход'}
			className={clsx(c.wrapper, className)}
			{...props}
		>
			<LoginForm successCallback={successCallback} />
		</Modal>
	);
};

export default LoginModal;

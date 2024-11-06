'use client';

import { FC, PropsWithChildren } from 'react';
import HeroSection from '@/shared/ui/sections/HeroSection';
import { useUserStore } from '@/entities/User';
import { useModalStore } from '@/shared/ui/Modal';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const isLogged = useUserStore(state => state.isLogged);

	const openModal = useModalStore(state => state.open);
	const openLoginModal = () => openModal('login');

	if (!isLogged)
		return (
			<HeroSection
				caption={
					'Для просмотра этой страницы вы должны быть авторизованы'
				}
				primaryBtn={{ text: 'Войти', onClick: openLoginModal }}
				secondaryBtn={{ text: 'Вернуться на главную', href: '/' }}
			/>
		);

	return <>{children}</>;
};

export default ProfileLayout;

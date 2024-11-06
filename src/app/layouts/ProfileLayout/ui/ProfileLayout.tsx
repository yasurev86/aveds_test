'use client';

import { FC, PropsWithChildren } from 'react';
import HeroSection from '@/shared/ui/sections/HeroSection';
import { useUserStore } from '@/entities/User';

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const isLogged = useUserStore(state => state.isLogged);

	if (!isLogged)
		return (
			<HeroSection
				caption={
					'Для просмотра этой страницы вы должны быть авторизованы'
				}
				primaryBtn={{ text: 'Войти' }}
				secondaryBtn={{ text: 'Вернуться на главную', href: '/' }}
			/>
		);

	return <>{children}</>;
};

export default ProfileLayout;

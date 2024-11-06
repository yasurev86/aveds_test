'use client';

import { FC, AllHTMLAttributes } from 'react';
import c from './Profile.module.scss';
import clsx from 'clsx';
import HeroSection from '@/shared/ui/sections/HeroSection';
import { useUserStore } from '@/entities/User';
import { useRouter } from 'next/navigation';

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Profile: FC<IProps> = ({ className, ...props }) => {
	const name = useUserStore(state => state.data?.name);
	const logOut = useUserStore(state => state.logOut);

	const { push } = useRouter();

	const logoutHandler = () => {
		logOut();
		push('/');
	};

	return (
		<section className={clsx(c.wrapper, className)} {...props}>
			<HeroSection
				caption={`Привет, ${name}`}
				primaryBtn={{
					text: 'Выйти из аккаунта',
					onClick: logoutHandler,
				}}
				secondaryBtn={{
					text: 'Перейти в контакты',
					href: '/contacts',
				}}
			/>
		</section>
	);
};

export default Profile;

'use client';

import { FC, AllHTMLAttributes } from 'react';
import c from './Home.module.scss';
import clsx from 'clsx';
import HeroSection from '@/shared/ui/sections/HeroSection';
import PostsSection from '@/shared/ui/sections/PostsSection';
import { getPosts } from '@/entities/Post';
import { useModalStore } from '@/shared/ui/Modal';
import { useUserStore } from '@/entities/User';

const posts = getPosts();

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Home: FC<IProps> = ({ className, ...props }) => {
	const isLogged = useUserStore(state => state.isLogged);
	const open = useModalStore(state => state.open);
	const openLoginModal = () => open('login');

	return (
		<div className={clsx(c.wrapper, className)} {...props}>
			<HeroSection
				caption={'Место для получения медицинской помощи'}
				primaryBtn={
					isLogged
						? { text: 'Перейти в личный кабинет', href: '/profile' }
						: { text: 'Войти', onClick: openLoginModal }
				}
				secondaryBtn={{ text: 'Контакты', href: '/contacts' }}
			/>
			<PostsSection posts={posts} />
		</div>
	);
};

export default Home;

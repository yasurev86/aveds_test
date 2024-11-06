import { FC, AllHTMLAttributes } from 'react';
import c from './Home.module.scss';
import clsx from 'clsx';
import HeroSection from '@/shared/ui/sections/HeroSection';

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Home: FC<IProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(c.wrapper, className)} {...props}>
			<HeroSection
				caption={'Место для получения медицинской помощи'}
				primaryBtn={{ text: 'Войти' }}
				secondaryBtn={{ text: 'Контакты', href: '/contacts' }}
			/>
		</div>
	);
};

export default Home;

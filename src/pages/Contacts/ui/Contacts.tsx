import { FC, AllHTMLAttributes } from 'react';
import c from './Contacts.module.scss';
import clsx from 'clsx';
import HeroSection from '@/shared/ui/sections/HeroSection';

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Contacts: FC<IProps> = ({ className, ...props }) => {
	return (
		<section className={clsx(c.wrapper, className)} {...props}>
			<HeroSection caption={'Контакты'} />
		</section>
	);
};

export default Contacts;

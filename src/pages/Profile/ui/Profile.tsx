import { FC, AllHTMLAttributes } from 'react';
import c from './Profile.module.scss';
import clsx from 'clsx';
import HeroSection from '@/shared/ui/sections/HeroSection';

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Profile: FC<IProps> = ({ className, ...props }) => {
	return (
		<section className={clsx(c.wrapper, className)} {...props}>
			<HeroSection caption={`Привет, `} />
		</section>
	);
};

export default Profile;

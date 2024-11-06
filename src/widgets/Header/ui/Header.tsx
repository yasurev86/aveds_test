import { FC, AllHTMLAttributes } from 'react';
import c from './Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import AuthBtn from '@/features/AuthBtn';

type IProps = {} & AllHTMLAttributes<HTMLDivElement>;
const Header: FC<IProps> = ({ className, ...props }) => {
	return (
		<div className={clsx(c.wrapper, className)} {...props}>
			<div className={c.inner}>
				<Link href={'/'} className={c.logo}>
					<img src="/assets/images/logo.svg" alt="" />
				</Link>
				<nav className={c.nav}>
					<Link href={'/contacts'}>Контакты</Link>
				</nav>
				<AuthBtn />
			</div>
		</div>
	);
};

export default Header;

import { FC, ButtonHTMLAttributes } from 'react';
import c from './Btn.module.scss';
import clsx from 'clsx';
import FullSizeLink from '@/shared/ui/FullSizeLink';

type IProps = {
	use: 'accent' | 'secondary';
	href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Btn: FC<IProps> = ({ use, href, className, children, ...props }) => {
	return (
		<button
			className={clsx(c.wrapper, c[`use--${use}`], className)}
			{...props}
		>
			{href && <FullSizeLink href={href} />}
			{children}
		</button>
	);
};

export default Btn;

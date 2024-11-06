import { FC, ButtonHTMLAttributes } from 'react';
import c from './Btn.module.scss';
import clsx from 'clsx';
import FullSizeLink from '@/shared/ui/FullSizeLink';

type IProps = {
	use?: 'accent' | 'secondary';
	href?: string;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Btn: FC<IProps> = ({
	use = 'accent',
	href,
	isLoading,
	disabled,
	className,
	children,
	...props
}) => {
	return (
		<button
			className={clsx(c.wrapper, c[`use--${use}`], className)}
			disabled={disabled || isLoading}
			{...props}
		>
			{href && <FullSizeLink href={href} />}
			{isLoading ? <>Загрузка...</> : children}
		</button>
	);
};

export default Btn;

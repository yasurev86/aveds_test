import { FC, ComponentProps } from 'react';
import c from './FullSizeLink.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

type IProps = {} & ComponentProps<typeof Link>;
const FullSizeLink: FC<IProps> = ({ className, ...props }) => {
	return <Link className={clsx(c.wrapper, className)} {...props} />;
};

export default FullSizeLink;

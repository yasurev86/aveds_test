import { FC, AllHTMLAttributes } from 'react';
import c from './HeroSection.module.scss';
import clsx from 'clsx';
import { IBtnProps } from '../model/IBtnProps';
import Btn from '@/shared/ui/Btn';

type IProps = {
	caption: string;
	primaryBtn?: IBtnProps;
	secondaryBtn?: IBtnProps;
} & AllHTMLAttributes<HTMLDivElement>;
const HeroSection: FC<IProps> = ({
	caption,
	primaryBtn,
	secondaryBtn,
	className,
	...props
}) => {
	return (
		<section className={clsx(c.wrapper, className)} {...props}>
			<h1 className={c.caption}>{caption}</h1>
			{(primaryBtn || secondaryBtn) && (
				<div className={c.btns}>
					{primaryBtn && (
						<Btn
							href={primaryBtn.href}
							onClick={primaryBtn.onClick}
						>
							{primaryBtn.text}
						</Btn>
					)}
					{secondaryBtn && (
						<Btn
							use={'secondary'}
							href={secondaryBtn.href}
							onClick={secondaryBtn.onClick}
						>
							{secondaryBtn.text}
						</Btn>
					)}
				</div>
			)}
		</section>
	);
};

export default HeroSection;

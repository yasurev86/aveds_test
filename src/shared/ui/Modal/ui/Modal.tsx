'use client';

import { FC, AllHTMLAttributes, useEffect } from 'react';
import c from './Modal.module.scss';
import clsx from 'clsx';
import { TModal, useModalStore } from '@/shared/ui/Modal';
import { createPortal } from 'react-dom';

type IProps = {
	name: TModal;
	caption: string;
	subcaption?: string;
} & AllHTMLAttributes<HTMLDivElement>;
const Modal: FC<IProps> = ({
	name,
	caption,
	subcaption,
	className,
	children,
	...props
}) => {
	const activeModal = useModalStore(state => state.active);
	const close = useModalStore(state => state.close);

	const isOpened = activeModal === name;

	useEffect(() => {
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				close();
			}
		});
	}, []);

	if (!isOpened) return;

	return createPortal(
		<div className={clsx(c.wrapper, className)} {...props}>
			<div className={c.inner}>
				<button className={c.close} onClick={close}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						viewBox="0 0 320.591 320.591"
						className=""
					>
						<g>
							<path
								d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
								fill="currentColor"
							></path>
							<path
								d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</button>
				<p className={c.caption}>{caption}</p>
				{subcaption && <p className={c.subcaption}>{subcaption}</p>}
				{children}
			</div>
		</div>,
		document.body,
	);
};

export default Modal;

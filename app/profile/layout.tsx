import { FC, PropsWithChildren } from 'react';
import ProfileLayout from '@/app/layouts/ProfileLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Профиль',
};

const _ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	return <ProfileLayout>{children}</ProfileLayout>;
};

export default _ProfileLayout;

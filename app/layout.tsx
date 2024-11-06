import type { Metadata } from 'next';
import '@/app/styles/globals.scss';
import { FC, PropsWithChildren } from 'react';
import Header from '@/widgets/Header';
import { Montserrat, Open_Sans } from 'next/font/google';
import clsx from 'clsx';
import LoginModal from '@/widgets/LoginModal';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600'],
});
const openSans = Open_Sans({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-open-sans',
	weight: ['500'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="ru">
			<body className={clsx(montserrat.variable, openSans.variable)}>
				<Header />
				<main className="content">{children}</main>
				<LoginModal />
			</body>
		</html>
	);
};

export default RootLayout;

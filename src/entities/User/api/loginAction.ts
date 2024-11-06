'use server';

import users from '@/app/data/users.json';
import { IUser } from '../model/IUser';

export const loginAction = async (
	login: string,
	password: string,
): Promise<{
	success: boolean;
	data?: IUser;
}> => {
	const user = users.find(u => u.login === login && u.password === password);

	if (user)
		return {
			success: true,
			data: {
				login,
				name: user.name,
			},
		};

	return {
		success: false,
	};
};

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../model/IUser';

interface IUserStore {
	isLogged: boolean;
	data?: IUser;
	logIn: (data: IUser) => void;
	logOut: () => void;
}

// По дефолту персист хранит в localStorage
export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			isLogged: false,
			data: undefined,
			logIn: (data: IUser) => set(() => ({ isLogged: true, data })),
			logOut: () => set(() => ({ isLogged: false, data: undefined })),
		}),
		{
			name: 'user-storage',
		},
	),
);

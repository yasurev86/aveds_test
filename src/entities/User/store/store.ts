import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '@/entities/User';

interface IUserStore {
	isLogged: boolean;
	data?: IUser;
	login: (data: IUser) => void;
	logout: () => void;
}

// По дефолту персист хранит в localStorage
export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			isLogged: false,
			data: undefined,
			login: (data: IUser) => set(() => ({ isLogged: true, data })),
			logout: () => set(() => ({ isLogged: false, data: undefined })),
		}),
		{
			name: 'user-storage',
		},
	),
);

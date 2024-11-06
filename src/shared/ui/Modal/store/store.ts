import { create } from 'zustand';

export type TModal = 'login';

interface IModalStore {
	active?: TModal;
	open: (name: TModal) => void;
	close: () => void;
}

export const useModalStore = create<IModalStore>()(set => ({
	active: undefined,
	open: (name: TModal) => set(() => ({ active: name })),
	close: () => set(() => ({ active: undefined })),
}));

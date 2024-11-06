import { ILoginData } from './ILoginData';

export type TErrors = {
	[key in keyof ILoginData]: string;
};

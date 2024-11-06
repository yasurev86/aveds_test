import {
	ChangeEvent,
	ComponentProps,
	FormEvent,
	useCallback,
	useState,
} from 'react';
import { ILoginData } from '../model/ILoginData';
import { TErrors } from '../model/TErrors';
import Input from '@/shared/ui/Input';
import { loginAction, useUserStore } from '@/entities/User';

export const useLoginForm = (successCallback?: () => void) => {
	const [data, setData] = useState<ILoginData>({
		login: '',
		password: '',
	});
	const [validationErrors, setValidationErrors] = useState<TErrors>({
		login: '',
		password: '',
	});
	const [errors, setErrors] = useState<TErrors>({
		login: '',
		password: '',
	});

	const [isFetching, setIsFetching] = useState<boolean>(false);

	const logIn = useUserStore(state => state.logIn);

	const handleSubmit = useCallback(
		async (e: FormEvent) => {
			e.preventDefault();

			const { login, password } = data;

			const loginError = !login && 'Логин не может быть пустым';
			const passwordError =
				password.length < 6 &&
				'Длина пароля не может быть меньше 6 символов';

			setValidationErrors(() => ({
				login: loginError || '',
				password: passwordError || '',
			}));

			if (loginError || passwordError) return;

			setIsFetching(true);
			const res = await loginAction(login, password);
			setIsFetching(false);

			if (res.success && res.data) {
				setErrors({
					login: '',
					password: '',
				});
				setValidationErrors({
					login: '',
					password: '',
				});
				logIn(res.data);
				successCallback && successCallback();
			} else {
				setErrors(cur => ({
					...cur,
					login: 'Не найден пользователь с указанной парой логин/пароль',
				}));
			}
		},
		[data],
	);

	const getInputProps = (
		name: keyof ILoginData,
	): Pick<
		ComponentProps<typeof Input>,
		'value' | 'setValue' | 'error' | 'validationError'
	> => ({
		value: data[name],
		setValue: (e: ChangeEvent<HTMLInputElement>) => {
			setErrors(cur => ({ ...cur, [name]: '' }));
			setValidationErrors(cur => ({ ...cur, [name]: '' }));
			setData(cur => ({ ...cur, [name]: e.target.value }));
		},
		error: errors && name in errors ? errors[name] : undefined,
		validationError:
			validationErrors && name in validationErrors
				? validationErrors[name]
				: undefined,
	});

	return {
		handleSubmit,
		getInputProps,
		isFetching,
	};
};

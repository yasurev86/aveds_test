import { FC, AllHTMLAttributes } from 'react';
import c from './LoginForm.module.scss';
import clsx from 'clsx';
import Input from '@/shared/ui/Input';
import Btn from '@/shared/ui/Btn';
import { useLoginForm } from '../hooks/useLoginForm';

type IProps = {
	successCallback?: () => void;
} & Pick<AllHTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
const LoginForm: FC<IProps> = ({ successCallback, className, ...props }) => {
	const { isFetching, handleSubmit, getInputProps } =
		useLoginForm(successCallback);

	return (
		<form
			className={clsx(c.wrapper, className)}
			onSubmit={handleSubmit}
			{...props}
		>
			<Input {...getInputProps('login')} label={'Логин'} />
			<Input
				{...getInputProps('password')}
				label={'Пароль'}
				type={'password'}
			/>
			<Btn type={'submit'} isLoading={isFetching}>
				Войти
			</Btn>
		</form>
	);
};

export default LoginForm;

import {
	FC,
	AllHTMLAttributes,
	InputHTMLAttributes,
	useId,
	ChangeEvent,
} from 'react';
import c from './Input.module.scss';
import clsx from 'clsx';

type IProps = {
	label?: string;
	value: string;
	setValue: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	validationError?: string;
} & Pick<
	InputHTMLAttributes<HTMLInputElement>,
	'placeholder' | 'type' | 'required'
> &
	AllHTMLAttributes<HTMLDivElement>;
const Input: FC<IProps> = ({
	label,
	placeholder,
	type = 'text',
	required,
	value,
	setValue,
	error,
	validationError,
	className,
	...props
}) => {
	const id = useId();

	return (
		<div className={clsx(c.wrapper, className)} {...props}>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				value={value}
				onChange={setValue}
				type={type}
				placeholder={placeholder}
				required={required}
				id={id}
			/>
			{error && <span className={c.error}>{error}</span>}
			{validationError && (
				<span className={c.validationError}>{validationError}</span>
			)}
		</div>
	);
};

export default Input;

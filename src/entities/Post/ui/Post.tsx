import { FC, AllHTMLAttributes } from 'react';
import c from './Post.module.scss';
import clsx from 'clsx';
import { IPost } from '../model/IPost';

type IProps = IPost & Omit<AllHTMLAttributes<HTMLDivElement>, 'id'>;
const Post: FC<IProps> = ({
	id,
	image,
	caption,
	content,
	className,
	...props
}) => {
	return (
		<div className={clsx(c.wrapper, className)} {...props}>
			<div className={c.image}>
				<img src={image} alt={`Post ${id} image`} />
			</div>
			<p className={c.caption}>{caption}</p>
			<hr />
			<p className={c.content}>{content}</p>
		</div>
	);
};

export default Post;

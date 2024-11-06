import { FC, AllHTMLAttributes } from 'react';
import c from './PostsSection.module.scss';
import clsx from 'clsx';
import Post, { IPost } from '@/entities/Post';

type IProps = { posts: IPost[] } & AllHTMLAttributes<HTMLDivElement>;
const PostsSection: FC<IProps> = ({ posts, className, ...props }) => {
	return (
		<section className={clsx(c.wrapper, className)} {...props}>
			{posts &&
				posts.map(({ id, ...data }) => (
					<Post className={c.post} key={id} id={id} {...data} />
				))}
		</section>
	);
};

export default PostsSection;

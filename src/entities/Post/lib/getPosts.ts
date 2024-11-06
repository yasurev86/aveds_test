import { IPost } from '../model/IPost';

export const getPosts: () => IPost[] = () => [
	{
		id: 1,
		image: '/assets/images/posts/1.svg',
		caption: 'Онлайн-прием',
		content: 'Рыба текст',
	},
	{
		id: 2,
		image: '/assets/images/posts/2.svg',
		caption: 'Экстренный Случай',
		content: 'Рыба текст',
	},
	{
		id: 3,
		image: '/assets/images/posts/3.svg',
		caption: 'Лечение рака',
		content: 'Рыба текст',
	},
];

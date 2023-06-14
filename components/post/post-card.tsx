import { Post } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PostContent from './post-conent';
interface PostProps {
	post: Post;
	layout?: 'vertical' | 'horizontal';
	reverse?: boolean;
}

const PostCard = ({
	post,
	layout = 'horizontal',
	reverse = false,
}: PostProps) => {
	const styling =
		layout === 'horizontal'
			? 'grid grid-cols-2 gap-10 items-center'
			: 'space-y-10';

	return (
		<Link
			className={styling}
			href={`/post/${post.slug}`}
		>
			{/* Post Image*/}
			<Image
				className={`rounded-md w-full object-cover object-center max-h-[300px] ${
					reverse ? 'order-last' : ''
				}`}
				src={post.image}
				width={640}
				height={300}
				alt={post.title}
			/>
			{/* Post Content */}
			<PostContent post={post} />
		</Link>
	);
};

export default PostCard;

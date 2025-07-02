import { PostCard } from '@/components/custom/PostCard';
import { Title } from '@/components/custom/Title';

import { POSTS_QUERYResult } from '../../sanity/types';

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <>
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </>
  );
}

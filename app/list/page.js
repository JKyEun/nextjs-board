import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  const posts = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      {posts.map(el => (
        <div className='list-item'>
          <Link key={el._id} href={`/detail/${el._id}`}>
            <h4>{el.title}</h4>{' '}
          </Link>
          <p>{el.content}</p>
          <DetailLink id={el._id} />
        </div>
      ))}
    </div>
  );
}

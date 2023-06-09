import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  const posts = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      {posts.map(el => (
        <Link href={`/detail/${el._id}`}>
          <div key={el._id} className='list-item'>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

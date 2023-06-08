import { connectDB } from '@/util/database';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  const posts = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      {posts.map(el => (
        <div key={el._id} className='list-item'>
          <h4>{el.title}</h4>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
}

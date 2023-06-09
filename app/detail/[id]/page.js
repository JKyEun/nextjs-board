import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database.js';

export default async function Detail({ params }) {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.id) });

  return (
    <div>
      <h1>상세페이지</h1>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}

import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function write(req, res) {
  if (req.method === 'DELETE') {
    if (req.query === '') return res.status(500).send('body가 안왔슈');
    try {
      const client = await connectDB;
      const db = client.db('forum').collection('post');
      const result = await db.deleteOne({ _id: new ObjectId(req.query.id) });
      return res.status(200).send('게시글 삭제 성공');
    } catch (err) {
      console.error(err);
    }
  }
}

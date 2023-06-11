import { connectDB } from '@/util/database';

export default async function write(req, res) {
  if (req.method === 'POST') {
    if (req.body === '') return res.status(500).send('body가 안왔슈');
    try {
      const client = await connectDB;
      const db = client.db('forum').collection('post');
      await db.insertOne(req.body);
      return res.status(201).send('게시글 등록 성공');
    } catch (err) {
      console.error(err);
    }
  }
}

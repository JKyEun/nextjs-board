import { connectDB } from '@/util/database';

export default async function write(req, res) {
  if (req.method === 'POST') {
    const client = await connectDB;
    const db = client.db('forum').collection('post');
    await db.insertOne(req.body);
    res.status(201).send('게시글 등록 성공');
  }
}

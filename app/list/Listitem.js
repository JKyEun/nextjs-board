'use client';

import Link from 'next/link';
import DetailLink from './DetailLink';
import axios from 'axios';

export default function Listitem({ posts }) {
  const removePost = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/remove/${id}`);
    console.log(res.data);
  };

  return (
    <>
      {posts.map((el) => (
        <div key={el._id} className='list-item'>
          <Link href={`/detail/${el._id}`}>
            <h4>{el.title}</h4>
          </Link>
          <p>{el.content}</p>
          <DetailLink id={el._id} />
          <button onClick={() => removePost(el._id)}>삭제</button>
        </div>
      ))}
    </>
  );
}

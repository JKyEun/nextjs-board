'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const writePost = async (e) => {
    e.preventDefault();

    if (title === '' || content === '') {
      return alert('제목 또는 내용이 입력되지 않았습니다.');
    }

    const post = {
      title: title,
      content: content,
    };

    try {
      const res = await axios.post('http://localhost:3000/api/write', post);
      console.log(res.data);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='p-20'>
      <h4>글 작성</h4>
      <form onSubmit={writePost}>
        <input onChange={onTitleChange} placeholder='제목' value={title} type='text' />
        <input onChange={onContentChange} placeholder='내용' value={content} type='text' />
        <button type='submit'>작성하기</button>
      </form>
    </div>
  );
}

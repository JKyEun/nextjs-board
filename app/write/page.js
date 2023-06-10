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

    const post = {
      title: title,
      content: content,
    };

    try {
      const res = await axios.post('http://localhost:3000/api/write', post);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }

    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h4>글 작성</h4>
      <form onSubmit={writePost}>
        <input onChange={onTitleChange} value={title} type='text' />
        <input onChange={onContentChange} value={content} type='text' />
        <button type='submit'>작성하기</button>
      </form>
    </div>
  );
}

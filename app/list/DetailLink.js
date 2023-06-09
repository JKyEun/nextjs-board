'use client';

import { useRouter } from 'next/navigation';

export default function DetailLink({ id }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/detail/${id}`);
      }}>
      상세보기
    </button>
  );
}

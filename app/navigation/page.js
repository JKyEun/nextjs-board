'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  console.log(pathName);
  console.log(searchParams);
  console.log(params);
  return <div>Navigation</div>;
}

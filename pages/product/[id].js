import React from 'react';
import { useRouter } from 'next/router';

function ProductId(props) {
  const router = useRouter();

  return <div>{router.query.id}</div>;
}

export default ProductId;

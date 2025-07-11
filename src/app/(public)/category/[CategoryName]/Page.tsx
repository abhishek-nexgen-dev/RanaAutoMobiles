'use client';

import { useParams } from "next/navigation";


const Page = () => {
  const params = useParams<{ CategoryName: string }>();
  const categoryName = params.CategoryName;

  return (
    <div>
      <h1>Category: {categoryName}</h1>
    </div>
  );
};

export default Page;

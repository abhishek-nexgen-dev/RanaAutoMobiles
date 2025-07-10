"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams();
    const categoryName = params.categoryName;

  return (
    <div>
        <h1>Category: {categoryName}</h1>
        page
        
        
        </div>
  )
}

export default page
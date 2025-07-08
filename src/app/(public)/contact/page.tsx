
import { ContactForm } from '@/features/Contact/v1'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-8">
      <ContactForm />
    </div>
  )
}

export default page
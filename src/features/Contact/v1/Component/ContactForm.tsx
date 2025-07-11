'use client';

import React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ContactFormInputs } from '../type/ContactForm.type';
import { contactSchema } from '../validator/contact.validator';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: joiResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormInputs) => {
    // Handle form submission (e.g., send to API)
    console.log(data);
    reset();
  };

  return (
    <Card className="max-w-lg w-full bg-[#181818] border-[#393939]">
      <CardHeader>
        <CardTitle className="text-[#10b981] text-3xl text-center bitcount-grid-double">
          Contact Us
        </CardTitle>
        <p className="text-gray-400 text-center mt-2">
          Have a question or need help? Fill out the form below and our team
          will get back to you as soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="name" className="text-[#4A4343] font-semibold mb-2">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              {...register('Name')}
              className="bg-[#2a2a2a] text-white"
              placeholder="Your Name"
            />
            {errors.Name && (
              <span className="text-red-500 text-xs">
                {errors.Name.message}
              </span>
            )}
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-[#4A4343] font-semibold mb-2"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register('Email')}
              className="bg-[#2a2a2a] text-white"
              placeholder="your@email.com"
            />
            {errors.Email && (
              <span className="text-red-500 text-xs">
                {errors.Email.message}
              </span>
            )}
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="text-[#4A4343] font-semibold mb-2"
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('Phone')}
              className="bg-[#2a2a2a] text-white"
              placeholder="Your Phone Number"
            />
            {errors.Phone && (
              <span className="text-red-500 text-xs">
                {errors.Phone.message}
              </span>
            )}
          </div>
          <div>
            <Label
              htmlFor="message"
              className="text-[#4A4343] font-semibold mb-2"
            >
              Message
            </Label>
            <textarea
              id="message"
              {...register('Message')}
              className="bg-[#2a2a2a] text-white w-full rounded px-4 py-2 min-h-[100px] border-none outline-none resize-none"
              placeholder="Type your message here..."
            />
            {errors.Message && (
              <span className="text-red-500 text-xs">
                {errors.Message.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-[#64b49a] text-black font-bold"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

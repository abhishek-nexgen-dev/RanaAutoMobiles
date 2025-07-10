"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { joiResolver } from '@hookform/resolvers/joi';
import { SignUpFormInputs } from '../type/SignUp.type';
import { SignUpSchema } from '../validator/Auth.validator';
import { useForm, SubmitHandler } from "react-hook-form";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormInputs>({
    resolver: joiResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    alert("Sign Up Successful");
    console.log(data);
    reset();
  };

  return (
    <div className="SignUp_Form w-full h-screen flex flex-col md:flex-row bg-black text-white border-[#393939]">
      {/* Left: Shop Info */}
      <div className="Left_Container md:w-1/2 w-full h-full flex flex-col justify-center p-10 md:p-16 bg-gradient-to-br from-[#121212] to-[#1f1f1f] rounded-bl-md rounded-tl-md">
        <h1 className="text-4xl md:text-5xl font-bold text-[#08ee7b] mb-4">
          Suraj Automobiles
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Your one-stop shop for all automobile needs — from engine parts to accessories, we’ve got you covered.
        </p>
        <div className="Shop_Details text-gray-300 space-y-3 text-base">
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Email:</strong> support@surajautomobiles.com
          </p>
          <p>
            <strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      {/* Right: Sign Up Form */}
      <div className="Right_Container md:w-1/2 w-full h-full bg-[#1a1a1a] p-8 md:p-16 flex items-center rounded-br-md rounded-tr-md">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#08ee7b] mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Sign up to manage your orders, track services, and more.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register("Name")}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="Your Name"
              />
              {errors.Name && (
                <span className="text-red-500 text-xs">{errors.Name.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("Email")}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="yourEmail@example.com"
              />
              {errors.Email && (
                <span className="text-red-500 text-xs">{errors.Email.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("Password")}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="Enter your password"
              />
              {errors.Password && (
                <span className="text-red-500 text-xs">{errors.Password.message}</span>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("ConfirmPassword")}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="Confirm your password"
              />
              {errors.ConfirmPassword && (
                <span className="text-red-500 text-xs">{errors.ConfirmPassword.message}</span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#08ee7b] hover:bg-[#06c96b] transition-colors duration-200 text-black font-semibold py-3 rounded-md"
            >
              Sign Up
            </Button>
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#08ee7b] hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

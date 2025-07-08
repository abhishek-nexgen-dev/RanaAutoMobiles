"use client";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { joiResolver } from '@hookform/resolvers/joi';
import { LoginFormInputs } from '../type/Login.type';
import { LoginSchema } from '../validator/Auth.validator';
import { useForm, SubmitHandler } from "react-hook-form";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: joiResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    alert("Login Successful");
    console.log(data);
    reset();
  };

  return (
    <div className="Login_Form w-[80%] h-[70%] flex items-center justify-center">
      <Card className="bg-[#1a1a1a] w-full p-0 m-0 flex flex-col border-[1px] border-[#393939] rounded-lg ">
        <CardHeader className="w-full p-0">
          <CardTitle className="bg-[#161313] text-center w-full py-[0.8rem] text-[#d1d5db] font-semibold flex items-center justify-center rounded-tr-2xl rounded-tl-2xl">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent className="mb-[2rem]">
          <form className="flex flex-col items-center justify-center gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col ">
                <Label
                  htmlFor="email"
                  className="text-[1.8vw] lg:text-[0.8vw] w-full mb-[1rem] text-[#4A4343] font-semibold"
                >
                  Your Email
                </Label>
                {errors.Email && (
                  <span className="text-yellow-400 text-xs">
                    {errors.Email.message}
                  </span>
                )}
                <Input
                  {...register('Email')}
                  id="email"
                  className="w-full h-[5.5vh] bg-[#2a2a2a] text-[#4A4343] py-[2vh] text-[2.5vw] border-none "
                  type="email"
                  placeholder="yourEmail@gmail.com"
    
                />
              </div>

              <div className="flex flex-col ">
                <Label
                  htmlFor="password"
                  className="text-[1.8vw] lg:text-[0.8vw] w-full mb-[1rem] text-[#4A4343] font-semibold"
                >
                  Password
                </Label>
                {errors.Password && (
                  <span className="text-yellow-400 text-xs">
                    {errors.Password.message}
                  </span>
                )}
                <Input
                  {...register('Password')}
                  id="password"
                  className="w-full h-[5.5vh] bg-[#2a2a2a] text-[#4A4343] py-[2vh] text-[2.5vw] border-none"
                  type="text"
                  placeholder="Your Password"
          
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#10b981] hover:bg-[#64b49a] hover:cursor-pointer mt-4"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full mb-[1.8rem] bg-[#6366f1] hover:bg-[#6163b4] text-white lg:mb-[13vh] hover:cursor-pointer"
            asChild
          >
            <Link href={'/signup'}>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

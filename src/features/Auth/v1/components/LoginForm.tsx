'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { joiResolver } from '@hookform/resolvers/joi';
import { LoginFormInputs } from '../type/Login.type';
import { LoginSchema } from '../validator/Auth.validator';
import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from '@/utils/api';
import { login } from '../Auth.Slice';

export function LoginForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: joiResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await api.post('/api/v1/auth/login', {
        email: data.Email,
        password: data.Password,
      });

      const user = res.data.data.user;
      console.log('user', user);

      if (res.data.success) {
        dispatch(
          login({
            email: user.email,
            name: user.name,
            role: user.role,
            _id: user._id,
          })
        );

        toast.success(res.data.message, {
          position: 'top-right',
          style: {
            marginTop: '10vh',
          },
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }

      console.log(res.data.data);
    } catch (error) {
      reset();

      toast.error(
        error instanceof Error ? error.message : 'An unexpected error occurred',
        {
          position: 'top-right',
          style: {
            marginTop: '10vh',
          },
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        }
      );
    }
  };

  return (
    <div className="Login_Form w-full h-[80vh] flex flex-col md:flex-row bg-black text-white border-[#393939]">
      {/* Left: Shop Info */}
      <div className="Left_Container md:w-1/2 w-full h-full flex flex-col justify-center p-10 md:p-16 bg-gradient-to-br from-[#121212] to-[#1f1f1f] rounded-bl-md rounded-tl-md">
        <h1 className="text-4xl md:text-5xl font-bold text-[#08ee7b] mb-4">
          Rana Auto Mobiles
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Your one-stop shop for all automobile needs — from engine parts to
          accessories, we’ve got you covered.
        </p>
        <div className="Shop_Details text-gray-300 space-y-3 text-base">
          <p>
            <strong className="mr-[0.5vw]">Address:-</strong> Bagodar Near
            Saibaba Mandir (GIRIDIH)JHR
          </p>
          <p>
            <strong className="mr-[0.5vw]"> Phone:- </strong> +91 9801956844 ,
            6203083782
          </p>
          <p>
            <strong className="mr-[0.5vw]"> Email:- </strong>{' '}
            skrana24681012@gmail.com
          </p>
          <p>
            <strong className="mr-[0.5vw]">Working Hours:- </strong> Mon - Sat:
            9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="Right_Container md:w-1/2 w-full h-full bg-[#1a1a1a] p-8 md:p-16 flex items-center rounded-br-md rounded-tr-md">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#08ee7b] mb-2">
            Login to Your Account
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Manage your orders, track service, and more.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register('Email')}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="yourEmail@example.com"
              />
              {errors.Email && (
                <span className="text-red-500 text-xs">
                  {errors.Email.message}
                </span>
              )}
            </div>

            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register('Password')}
                className="bg-[#2a2a2a] text-white w-full h-12 px-4 rounded-md border border-transparent focus:border-[#08ee7b] focus:outline-none"
                placeholder="Enter your Password"
              />
              {errors.Password && (
                <span className="text-red-500 text-xs">
                  {errors.Password.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#08ee7b] hover:bg-[#06c96b] transition-colors duration-200 text-black font-semibold py-3 rounded-md"
            >
              Login
            </Button>

            <ToastContainer />
          </form>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-[#08ee7b] hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

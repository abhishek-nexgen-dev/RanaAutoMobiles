import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export function LoginForm() {
  return (
  <div className="Login_Form w-[80%] h-[70%] flex items-center justify-center">

 
<Card className="bg-[#201E1E] w-full h-full p-0 m-0 flex flex-col  border-[1px] border-[#393939] rounded-lg ">
      <CardHeader className='w-full p-0'>
        <CardTitle className='bg-[#161313] text-center w-full py-[0.8rem] text-white font-semibold flex items-center justify-center rounded-tr-2xl rounded-tl-2xl'>Sign In</CardTitle>
      </CardHeader>
      <CardContent className='mb-[2rem]'>
        <form className='flex flex-col items-center justify-center gap-4 w-full'>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col ">
              <Label htmlFor="email" className='text-[0.8vw] w-full mb-[1rem] text-[#4A4343] font-semibold'>Your Email</Label>
              <Input
                id="email"
                className="w-full h-[5.5vh] bg-[#302B2B] text-[#4A4343] py-[2vh] text-[2.5vw] border-none "
                type="email"
         
                placeholder="yourEmail@gmail.com"
                required
              />
            </div>


            <div className="flex flex-col ">
              <Label htmlFor="email" className='text-[0.8vw] w-full mb-[1rem] text-[#4A4343] font-semibold'>Your Email</Label>
              <Input
                id="email"
                className="w-full h-[5.5vh] bg-[#302B2B] text-[#4A4343] py-[2vh] text-[2.5vw] border-none "
                type="password"
         
                placeholder="Your Password"
                required
              />
            </div>
          </div>
       
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button type="submit" className="w-full">
          Send Otp
        </Button>
        <Button variant="outline" className="w-full mb-[1.8rem]" asChild>
          <Link href={'signup'}>Sign Up</Link>
        </Button>
      </CardFooter>
    </Card>
  </div>
  );
}

import Link from "next/link";

const SignupPage = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='h-full flex-[0.5] flex items-center justify-center flex-col gap-y-2'>
        <h1 className='text-green-600 text-4xl font-bold'>
          Green Basket - Delivery
        </h1>
        <p className='text-stone-600 text-lg'>
          Deliver with ease, join our team today!
        </p>
      </div>
      <div className='flex flex-1 flex-col justify-center items-center max-w-[600px] p-4'>
        <h1 className='text-xl font-bold mb-6 mt-12'>
          Register as Delivery Man
        </h1>
        <div className='flex flex-col w-full gap-y-2   p-4 sm:p-8 rounded'>
          <div className='w-full flex flex-col'>
            <p className='text-stone-500'>First name</p>
            <input type='text' className='border p-2 rounded' />
          </div>
          <div className='w-full flex flex-col'>
            <p className='text-stone-500'>Last name</p>
            <input type='text' className='border p-2 rounded' />
          </div>
          <div className='w-full flex flex-col'>
            <p className='text-stone-500'>Email</p>
            <input type='text' className='border p-2 rounded' />
          </div>
          <div className='w-full flex flex-col'>
            <p className='text-stone-500'>Password</p>
            <input type='text' className='border p-2 rounded' />
          </div>
          <div className='w-full flex flex-col'>
            <p className='text-stone-500'>Current Password</p>
            <input type='text' className='border p-2 rounded' />
          </div>
          <button className='bg-green-600 text-white p-2 font-bold rounded my-4'>
            Register
          </button>
          <div className='flex gap-x-2 flex-wrap'>
            <p>Have got an account?</p>
            <Link href='/login' className='font-bold'>
              Login here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

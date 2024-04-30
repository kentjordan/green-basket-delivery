const SignupPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center  w-full max-w-[600px] p-4'>
        <h1 className='text-green-600 text-2xl font-bold'>Green Basket</h1>
        <p className='text-sm text-stone-500'>
          Deliver with ease, join our team today!
        </p>
        <hr />
        <h1 className='text-xl font-bold mb-6 mt-12'>
          Register as Delivery Man
        </h1>
        <div className='flex flex-col w-full gap-y-2 border p-4 sm:p-8 rounded'>
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
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

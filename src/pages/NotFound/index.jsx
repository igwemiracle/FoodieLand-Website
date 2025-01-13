import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-[1rem] items-center justify-center mt-[200px]'>
      <h1 className='text-2xl'>Sorry</h1>
      <p>That page cannot be found</p>
      <Link className=' bg-[#000] text-white rounded-[20px] p-[1rem] w-[15%] text-center' to="/">
        Back to homepage...
      </Link>
    </div>
  );
}

export default NotFound;
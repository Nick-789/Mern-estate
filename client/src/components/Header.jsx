import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-gray-700 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-xl flex items-center'>
            <span className='text-white mr-1'>Nikhil</span>
            <span className='text-teal-400'>Estate</span>
          </h1>
        </Link>
        <form className='bg-gray-800 p-2 rounded-lg flex items-center shadow-md'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-white placeholder-teal-400'
          />
          <button className='ml-2'>
            <FaSearch className='text-teal-400' />
          </button>
        </form>
        <ul className='flex gap-6'>
          <li className='hidden sm:inline'>
            <Link to='/' className='text-teal-400 hover:text-white transition duration-300'>
              Home
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='/about' className='text-teal-400 hover:text-white transition duration-300'>
              About
            </Link>
          </li>
          <li className='sm:inline'>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-teal-400 hover:text-white transition duration-300'> Sign in</li>
            )}
          </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

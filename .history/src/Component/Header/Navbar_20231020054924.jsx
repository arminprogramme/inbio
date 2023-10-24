import  { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                
<nav className=" black-bg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
    <a href="https://.com/" className="flex items-center">
       <h2 className='text-white'>React Project</h2>
    </a>
    <button data-collapse-toggle="navbar-default" type="button"  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
    <i className="fa fa-bars text-white"></i>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 black-bg">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white md:hover:text-gray-700 dark:text-white md:dark:hover:text-gray-500 rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            </div>
        );
    }
}

export default Navbar;

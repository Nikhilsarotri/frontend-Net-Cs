import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => (
  <h1 id="title" className="text-2xl m-2" key="h1tag">
    NET CS
  </h1>
);

const Header = () => {
  return (
    <div className="header-container h-20 fixed top-0 left-0 right-0 z-50 ">
      <div className="header shadow-2xl flex h-full bg-gradient-to-r from-emerald-300 to-green-500 text-white justify-between items-center font-serif">
        <Logo />

        <div className="nav_items relative h-36  m-5 p-5 flex">
          <ul className="hidden md:flex text-2xl justify-around mt-1 text-white p-50 ">
            <li className="hover:text-black p-10">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black p-10 relative group">
              <button className="group-hover:text-black">Syllabus</button>
              <ul className="dropdown absolute hidden  bg-green-500 text-white py-1 px-2 rounded-md shadow-lg top-full left-0 mt-1 group-hover:block">
                <li>
                  <Link to="/syllabuspaper1">Paper 1</Link>
                </li>
                <li>
                  <Link to="/syllabuspaper2">Paper 2</Link>
                </li>
                {/* Add more dropdown items here */}
              </ul>
            </li>
            <li className="hover:text-black p-10 relative group">
              <button className="group-hover:text-black">PYQ</button>
              <ul className="dropdown absolute hidden  bg-green-500 text-white py-1 px-2 rounded-md shadow-lg top-full left-0 mt-1 group-hover:block">
                <li>
                  <Link to="pyqP1">Paper-1</Link>
                </li>
                <li>
                  <Link to="/pyqP2"> Paper-2</Link>
                </li>
                {/* Add more dropdown items here */}
              </ul>
            </li>
            <li className="hover:text-black p-10 relative group">
              <button className="group-hover:text-black">Mock Test</button>
              <ul className="dropdown absolute hidden  bg-green-500 text-white py-1 px-2 rounded-md shadow-lg top-full left-0 mt-1 group-hover:block">
                <li>
                  <Link to="/mocktest1">Mock1</Link>
                </li>
                <li>
                  <Link to="/mocktest2">Mock2</Link>
                </li>
                {/* Add more dropdown items here */}
              </ul>
            </li>
           
            <li className="hover:text-black p-10 relative group">
              <Link to="/ebooks">e-books</Link>
            </li>
           
            <li className="hover:text-black p-10">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="hover:text-black p-10">
              <Link to="/experiment">Subjects</Link>
            </li>
           
          <div className='ml-10 mt-10'> <button className="text-blue-700 hover:text-black mr-4">
              <Link to="/login">Login</Link>
            </button></div>
          </ul>
        </div>
      </div>
    
    
    </div>
    
  );
};

export default Header;

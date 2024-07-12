// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar-container fixed mb-36 top-20 left-0 right-0 z-40 bg-green-500 text-white  p-3 flex justify-around ">
//       <Link to="/experiment" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         DSA
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         DSM
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         Computer System Architecture
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         DBMS
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//        System  Software & Os
//       </Link> 
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         Programming Languages & Computer Graphics
//       </Link> 
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         TOC
//       </Link> 
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         Data Communication and CN
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//         AI
//       </Link>
//       <Link to="/#" className="hover:bg-green-700 px-4 py-2 rounded-md">
//     Software Engineering
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';

const Navbar = ({ subjects, handleSubjectClick }) => {
  return (
    <nav className="navbar-container fixed mb-36 top-20 left-0 right-0 z-40 bg-green-500 text-white p-3 flex justify-around">
      {subjects && subjects.length > 0 ? (
        subjects.map((subject) => (
          <li
            key={subject.id}
            className="hover:bg-green-700 px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleSubjectClick(subject)}
          >
            {subject.name}
          </li>
        ))
      ) : (
        <li>No subjects available</li>
      )}
    </nav>
  );
};

export default Navbar;




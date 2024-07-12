
// import React, { useState } from "react";
// import{useNavigate} from "react-router-dom";
// const URL="http://localhost:8000/api/auth/register";
// import { Link } from "react-router-dom";
// const SignupForm = () => {

// //
// const [user,setUser]=useState({
// name:"",
// email:"",
// phone:"",
// password:""
// })
// const navigate=useNavigate();
// //handle user input
// const handleinput =(e)=>{
//   const name= e.target.name;
//   const value= e.target.value;
// console.log(e)
//   setUser({
//     ...user,[name]:value
//   });

// };

// //handle submission
// const handlesubmit=async (e)=>{
//   e.preventDefault();
//    const formErrors = validateForm(user);
//   if (Object.keys(formErrors).length === 0) {
//     console.log("Form submitted:", user);
//     alert("Signup successful");
//   } else {
//     const errorMessages = Object.values(formErrors).join('\n');
//     alert("Signup failed:\n" + errorMessages);
//   }
//   //connectivity to backend
//   console.log(user)
//   try{
// const response=await fetch(URL,{
//    method:"POST",
//    headers:{
//     "Content-Type":"application/json",
// },
//     body:JSON.stringify(user),    //object into json
    
// });
// if(response.ok){
//   setUser({name:"",email:"",phone:"", password:""})
//   navigate("/login");
// }
// console.log(response);}

// catch(error){
//   console.log('register',error)
// }}

// const validateForm = (values) => {
//   let errors = {};
//   if (!values.name.trim()) {
//     errors.name = "Name is required";
//   }
//   if (!values.email.trim()) {
//     errors.email = "Email is required";
//   } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.phone.trim()) {
//     errors.phone = "Phone number is required";
//   } else if (!/^\d{10}$/.test(values.phone.trim())) {
//     errors.phone = "Phone number must be 10 digits";
//   }
//   if (!values.password.trim()) {
//     errors.password = "Password is required";
//   } else if (values.password.trim().length < 6) {
//     errors.password = "Password must be at least 6 characters long";
//   }
//   return errors;

// }



//   return (
//     <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
//       <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="flex-1 bg-gray-100 text-center hidden md:flex">
//           <div
//             className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//             style={{
//               backgroundImage:'url("https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg")'
//             }}
//           ></div>
//         </div>
        
//         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//           <div className=" flex flex-col items-center">
//             <div className="text-center">
//               <h1 className="text-2xl xl:text-4xl font-extrabold text-green-900">
//                 Student Sign up
//               </h1>
//               <p className="text-[12px] text-gray-500">
//                 Hey enter your details to create your account
//               </p>
//             </div>
//             <div className="w-full flex-1 mt-8">
//               <div className="mx-auto max-w-xs flex flex-col gap-4">
//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="text"
                  
//                   placeholder="Enter your name"
//                   name="name"
//                   id="userid"
//                   value={user.name}
//                   onChange={handleinput}
//                 />
//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   id="useremail"
//                   value={user.email}
//                   onChange={handleinput}
//                 />
//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="phone"
//                   placeholder="Enter your phone"
//                   name="phone"
//                   id="userphone"
//                   value={user.phone}
//                   onChange={handleinput}
//                 />
//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   id="userpassword"
//                   value={user.password}
//                   onChange={handleinput}
//                 />
//                 <button onClick={handlesubmit} className="mt-5 tracking-wide font-semibold bg-green-900 text-gray-100 w-full py-4 rounded-lg hover:bg-emerald-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
//                   <svg
//                     className="w-6 h-6 -ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     strokeLinecap="round"
//                     stroke-linejoin="round"
//                   >
//                     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                     <circle cx="8.5" cy="7" r="4" />
//                     <path d="M20 8v6M23 11h-6" />
//                   </svg>
//                   <span className="ml-3">Sign Up</span>
//                 </button>
//                 <p className="mt-6 text-xs text-gray-600 text-center">
//                   Already have an account?{" "}
//                   <a href="">
//                     <span className="text-blue-900 font-semibold"><Link to="/login">Sign in</Link></span>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SignupForm;




import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const URL = "http://localhost:8000/api/auth/register";

const SignupForm = () => {
    const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(user);
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await fetch(URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                });

                if (response.ok) {
                    setUser({ name: "", email: "", phone: "", password: "" });
                    navigate("/login");
                    alert("Signup successful");
                } else {
                    alert("Signup failed: " + response.statusText);
                }
            } catch (error) {
                console.log('register error:', error);
                alert("Signup failed: " + error.message);
            }
        } else {
            const errorMessages = Object.values(formErrors).join('\n');
            alert("Signup failed:\n" + errorMessages);
        }
    };

    const validateForm = (values) => {
        let errors = {};
        if (!values.name.trim()) {
            errors.name = "Name is required";
        }
        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
            errors.email = "Invalid email address";
        }
        if (!values.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(values.phone.trim())) {
            errors.phone = "Phone number must be 10 digits";
        }
        if (!values.password.trim()) {
            errors.password = "Password is required";
        } else if (values.password.trim().length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }
        return errors;
    };

    return (
        <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
            <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-gray-100 text-center hidden md:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg")' }}
                    ></div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className=" flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold text-green-900">
                                Student Sign up
                            </h1>
                            <p className="text-[12px] text-gray-500">
                                Hey enter your details to create your account
                            </p>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs flex flex-col gap-4">
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleInput}
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="phone"
                                    placeholder="Enter your phone"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleInput}
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                                <button onClick={handleSubmit} className="mt-5 tracking-wide font-semibold bg-green-900 text-gray-100 w-full py-4 rounded-lg hover:bg-emerald-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Sign Up</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Already have an account?{" "}
                                    <span className="text-blue-900 font-semibold"><Link to="/login">Sign in</Link></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
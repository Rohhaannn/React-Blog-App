import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  useEffect(() => {
    const modal = document.getElementById("signup_modal");
    if (modal) modal.showModal();
  }, []);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <dialog id="signup_modal" className="modal border-[2px] border-shadow-md dark:text-white display-block">
          <div className="modal-box dark:bg-white dark:text-black">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl text-center">Sign Up!</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"
              />
            </div>

            <div className="items-center text-center space-x-5">
              <button className="btn mt-6 btn-secondary hover:bg-pink-600 hover:text-white duration-300">Sign Up</button>
            </div>

            <div className="items-center text-center mt-7">
              <p>
                Already registered? <Link to="/login" className="text-blue-600 underline cursor-pointer">Login</Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Signup;




//===============================================================================================================================

// import React from 'react'
// import { Link } from 'react-router-dom'

// function Signup() {
//   return (
//     <>
//       <div className='flex h-screen items-center justify-center'> 
//       <h1> This is SignUp </h1>
//         <dialog id="my_modal_3" className={`modal border-[2px] border-shadow-md dark:text-white display-block`}>
//           <div className="modal-box dark:bg-white dark:text-black ">
//             <form method="dialog">
              
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </button>
//             </form>
//             {/* <h3 className="font-bold text-2xl text-center "> Sign Up!</h3> */}

//             <div className="mt-4 space-y-2">
//               <span> Name </span>
//               <br/>
//               <input
//                 type="text"
//                 placeholder="Enter Your Email"
//                 className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
//               />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span> Email </span>
//               <br/>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
//               />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span> Password </span>
//               <br/>
//               <input
//                 type="password"
//                 placeholder="Enter Your Password"
//                 className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
//               />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span> Confirm Password </span>
//               <br/>
//               <input
//                 type="password"
//                 placeholder="Enter Your Password"
//                 className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
//               />
//             </div>

//             <div className="items-center text-center space-x-5">
//               <button className="btn mt-6 btn-secondary hover:bg-pink-600 hover:text-white duration-300"> Sign Up </button>
//             </div>

//             <div className="items-center text-center mt-7">
//               <p>
//                 Already registered ? <Link to="/login" className="text-blue-600 underline cursor-pointer"> Login </Link>
//               </p>
//             </div>

//           </div>
//         </dialog>
//       </div>
//     </>
//   )
// }

// export default Signup

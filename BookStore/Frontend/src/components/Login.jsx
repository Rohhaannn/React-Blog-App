import React from "react";
import { Link } from "react-router-dom";


function Login() {



  return (
    <div>
      <dialog id="my_modal_3" className={`modal dark:text-white`}>
        <div className="modal-box dark:bg-white dark:text-black ">
          <form method="dialog">
            
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center ">Login!</h3>

          <div className="mt-4 space-y-2">
            <span> Email </span>
            <br/>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
            />
          </div>
          <div className="mt-4 space-y-2">
            <span> Password </span>
            <br/>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black"  
            />
          </div>

          <div className="items-center text-center space-x-5">
            <button className="btn mt-6 btn-secondary hover:bg-pink-600 hover:text-white duration-300"> Login </button>
          </div>

          <div className="items-center text-center mt-7">
            <p>
              Not registered ? <Link to="/signup" className="text-blue-600 underline cursor-pointer"> Sign Up </Link>
            </p>
          </div>

        </div>
      </dialog>
    </div>
  );
}

export default Login;

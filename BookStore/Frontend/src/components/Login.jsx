import React from "react";

function Login() {



  return (
    <div>
      <dialog id="my_modal_3" className={`modal dark:text-white`}>
        <div className="modal-box">
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
              className="w-full px-3 py-1 border rounded-md outline-none"  
            />
          </div>
          <div className="mt-4 space-y-2">
            <span> Password </span>
            <br/>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-1 border rounded-md outline-none"  
            />
          </div>

          <div className="items-center text-center space-x-5">
            <button className="btn mt-6 btn-secondary hover:bg-pink-600 hover:text-white duration-300"> Login </button>
            <button className="btn mt-6 bg-[#ebeeee] text-black hover:bg-gray-300 duration-300"> cancel </button>
          </div>

        </div>
      </dialog>
    </div>
  );
}

export default Login;

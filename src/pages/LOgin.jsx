import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useFirstContext } from "../context/FirstPrivader";

const Login = () => {
  const [user,setUser]=useState("")
  const { come }=useFirstContext()
  
  console.log(user);


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(user.toLowerCase()==="kcrsln"){
      come({user});     
    }else{
      alert("username is incorrectly")      
    }
  }
  return (
    
      <main className="w-full h-screen flex flex-col items-center justify-center px-4 border-4 border-main">
        <div className="max-w-sm w-full   dark:bg-gray-700 dark:text-main text-gray-600 space-y-8">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-thirdColor font-montelugra  text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-medium font-montelugra text-seconColor hover:after:content-['KCRSLN'] hover:after:text-[10px] hover:after:text-secondColor hover:after:font-sans  hover:after:underline hover:after:ms-2 mb-[-.5rem]" htmlFor="name">Username</label>
              {/*htmlfor ile aşağıda id yi aynı verince labele tıkladığında ilgili yer focus oluyor */}
              <input
                type="text"
                id="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-thirdColor shadow-sm rounded-lg"
                onChange={(e)=>setUser(e.target.value)}
              />
            </div>
            <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-purple-500 hover:bg-purple-400 active:bg-indigo-600 rounded-lg duration-300">
              Sign in
            </button>
          </form>

          <div className="text-center">
            <Link 
              to="username"
              className=" text-seconColor hover:text-[15px]"
            >
              Forgot username?
            </Link>
          </div>
          <Outlet/>
        </div>
      </main>

  );
};

export default Login;

import React from "react";
import sharedStyles from '../sharedStyles.module.css'


  export default function LoginCard() {
    return (
      <div class="p-10" className={sharedStyles.loginCard}>  
   
    <div class="max-w-sm rounded overflow-hidden shadow-lg className=logincard ">
      
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-2">Welcome</div>
        <p class="text-gray-700 text-base">
          Sign In with your Username and Password
        </p>
        <div class="mb-4 mt-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="loginFormField"
                      placeholder="Username"
                  
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="loginFormField"
                      placeholder="Password"
                  
                    />
                  </div>
                  <div class="text-center pt-3 mb-6 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 text-white bg-sky-900 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      
                    >
                      Log in
                    </button>
                    <a class="text-sky-900 font-bold" href="#!">Forgot password?</a>
                  </div>

                  <div class="flex items-center justify-center">
                    <p class="text-center mb-0 mr-2">Don't have an account?</p>
                    <a class="text-sky-900 font-bold" href="#!">Sign Up</a>
                  </div>
      </div>
      
    </div>
  </div>
    );
  }
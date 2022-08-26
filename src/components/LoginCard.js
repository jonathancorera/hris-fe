import React from "react";
import sharedStyles from '../sharedStyles.module.css'


  export default function LoginCard() {
    return (
      <div class="p-10" className={sharedStyles.logincard}>  
   
    <div class="max-w-sm rounded overflow-hidden shadow-lg className=logincard">
      
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-2">Welcome</div>
        <h1> Hello</h1>
        <p class="text-gray-700 text-base">
          Sign In with your Username and Password
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 bg-white">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
    );
  }
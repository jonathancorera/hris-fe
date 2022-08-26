import React from "react";
import LoginCard from "../components/LoginCard";
import sharedStyles from '../sharedStyles.module.css'

function LoginPage () {
    return(

    <div>

    <div class="flex">
    <div class="w-1/3 bg-sky-900 h-screen" >
    
    {<img src={require('../images/logo.png')} alt = "login" class="mx-auto object-contain h-32 w-50 mt-10" />}
    <h1 class = "flex flex-col h-4/6 justify-end items-center text-white font-bold text-3xl font-mono"> HRIS System </h1>
    </div>



    <div class="w-2/3 bg-gray-400 h-screen">
    
     {/* {<img src={require('../images/login4.png')} alt = "login" class="mx-auto h-full py-2 pr-4 mr-8" />} */}
     {<img src={require('../images/login4.png')} alt = "login" class="mx-auto" />}
    </div>
    <LoginCard />
    </div>

    </div>

    );

}

export default LoginPage;
import React from "react";
import LoginCard from "../components/LoginCard";
import sharedStyles from '../sharedStyles.module.css'

function LoginPage () {
    return(

    <div>

    <div class="flex">
    <div class="w-1/3 bg-gray-700 h-screen" ></div>
    <div class="w-2/3 bg-gray-400 h-screen">
        {<img src={require('../images/login.jpg')} alt = "login" />}
    </div>
    </div>

    </div>

    );

}

export default LoginPage;
import React from "react";
import LoginCardForm from "../components/LoginCardForm";


function LoginPage () {
    return(
    <div>
    <div class="flex mb-4">
    <div class="w-1/3 bg-gray-400 h-screen"></div>
    <div class="w-2/3 bg-gray-500 h-screen"></div>
    <LoginCardForm />
    </div>
    </div>
    );

}

export default LoginPage;
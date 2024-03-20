import React from "react";

import { Routes,Route } from "react-router-dom";
import Mail from "./Mail";
import Left from "./Left";
import Header from "./Header";
import Right from "./Right";

const Main=()=>{
    return (

        <div class="body-wrapper">
            <Left />
            <Header/>
            <Mail/>
            <Routes>
                <Route  path='inbox' element={<Mail params="Inbox"/>} /> 
                <Route  path='/sent' element={<Mail params="Sent"/>} />      
            </Routes>
            <Right/>
            
        </div>

       
    )
};
export default Main;

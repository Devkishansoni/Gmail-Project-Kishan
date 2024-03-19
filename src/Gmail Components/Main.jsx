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
            {/* <Routes>
                <Route path='/mail' element={<Mail/>} />  
                <Route  path='/started' element={<Started/>} />  
                {/* <Route  path='/Sent' element={<Sent/>} />        */}
            {/* </Routes> */}
            <Right/>
            
        </div>

       
    )
};
export default Main;

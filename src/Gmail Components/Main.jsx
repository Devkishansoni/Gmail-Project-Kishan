import React from "react";

import { Routes,Route, useParams } from "react-router-dom";
import Left from "./Left";
import Header from "./Header";
import Mail from "./Mail";
import Right from "./Right";
import Inbox from "./Inbox";
import Snoozed from "./Snoozed";
import Starred from "./Starred";
import Drafts from "./Drafts";

const Main=()=>{
    return (

        <div class="body-wrapper">
            <Left />
            <Header />
            <Mail />
            
            <Routes>
                <Route path="/inbox" element={<Mail param="inbox" />} />
                <Route path="/Drafts" element={<Mail param="Drafts"/>} />
                <Route path="/Snoozed" element={<Mail param="Snoozed" />} />
                <Route path="/Starred" element={<Mail param="Starred"/>} />
                <Route path="/sent" element={<Mail param="sent"/> } />
            </Routes>

            <Right/>
        </div>

       
    )
};
export default Main;

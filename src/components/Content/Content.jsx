import React from "react";
import Profile from "./Profile/Profile";
import Chats from "./Chats/Chats";
import {Route, Routes} from "react-router-dom";
import Settings from "./Settings/Settings";

const Content = () => {
    return (
        <Routes>
            <Route path={"/profile"} Component={Profile}/>
            <Route path={"/chats"} Component={Chats}/>
            <Route path={"/settings"} Component={Settings}/>
        </Routes>
    );
}

export default Content;
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <div>
                <NavLink to="/profile">
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/chats">
                    Chats
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;
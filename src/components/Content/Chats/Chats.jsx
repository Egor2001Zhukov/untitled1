import React from "react";
import Message from "./Message/Message";
import Chat from "./Chat/Chat";
import classes from "./Chats.module.css";

const Chats = () => {
    return (
        <div className={classes.chatsWrapper}>
            <div className={classes.chatsList}>
                <Chat/>
                <Chat/>
                <Chat/>
            </div>
            <div className={classes.messagesList}>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    );
}

export default Chats;

//    @..@
//   (----)
//  ( >  < )
//  ^^ ~~ ^^
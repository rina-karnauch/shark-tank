import * as React from 'react';
import Inbox from './LeftSideChat/Inbox'
import Grid from '@mui/material/Grid';
import Card from './Card.js'

import {useState} from 'react';
import {ChatFeed, Message} from "react-chat-ui";
import ChatBox, {ChatFrame} from "react-chat-plugin";

function Chat() {

    const [messages, setMessages] = useState([
        {
            text: "Daniel has joined the conversation",
            timestamp: 1578366389250,
            type: "notification"
        },
        {
            author: {
                username: "Israel",
                id: 1,

            },
            text: "Hi",
            type: "text",
            timestamp: 1578366393250
        },
        {
            author: {username: "Daniel", id: 2, avatarUrl: null},
            text: "hello!",
            type: "text",
            timestamp: 1578366425250,
        },
        {
            author: {
                username: "Israel",
                id: 1,
            },
            text: "What's up?",
            type: "text",
            timestamp: 1578366425250,
            hasError: true
        }
    ]);

    const handleOnSendMessage = (message) => {
        setMessages(
            messages.concat({
                author: {
                    username: "Israel",
                    id: 1,
                },
                text: message,
                timestamp: +new Date(),
                type: "text"
            })
        );
    };

    return (
        <Grid container spacing={2}
              style={{}}>
            <Grid item
                  xs={3}
                  style={{
                      height: "110vh",
                  }}>
                <Inbox fullname={"MyName"} profilePicture={"PATH"}/>
            </Grid>
            <Grid container item xs={9}>
                <Grid item xs={6} style={{
                    display: "flex",
                    position:"relative",
                    top:"-23px",
                    alignItems: "center",
                }}>
                    <ChatBox
                             messages={messages}
                             userId={1}
                             onSendMessage={handleOnSendMessage}
                             width={"523px"}
                             height={"95vh"}
                    />
                </Grid>
                <Grid item
                      xs={6}
                      style={{
                          borderLeft: "1px solid #F1F1F1",
                      }}
                >
                    <Card/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Chat;
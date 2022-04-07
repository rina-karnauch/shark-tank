import * as React from 'react';
import Grid from '@mui/material/Grid';
import { ChatFeed, Message } from "react-chat-ui";
import ChatBox, { ChatFrame } from "react-chat-plugin";
import {useState} from 'react';

function Chat() {

    const [messages, setMessages] = useState([
        {
            text: "Daniel has joined the chat",
            timestamp: 1578366389250,
            type: "notification"
        },
        {
            author: {
                username: "Israel",
                id: 1,
                avatarUrl: null,
            },
            text: "Hi",
            type: "text",
            timestamp: 1578366393250
        },
        {
            author: {
                username: "Daniel", id: 2,
                avatarUrl: null },
            text: "Show two buttons",
            type: "text",
            timestamp: 1578366425250,
        },
        {
            author: {
                username: "Israel",
                id: 2,
                avatarUrl: null
            },
            text: "instrumented by rina",
            type: "text",
            timestamp: 1578366425250,
            hasError: false,
        }
    ]);

    const handleOnSendMessage = (message) => {
        setMessages(
            messages.concat({
                author: {
                    username: "Israel",
                    id: 1,
                    avatarUrl: null
                },
                text: message,
                timestamp: +new Date(),
                type: "text"
            })
        );
    };

    const handleOnReceiveMessage = (message) => {
        setMessages(
            messages.concat({
                author: {
                    username: "Daniel",
                    id: 2,
                    avatarUrl: null
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
                      borderRight: "1px solid black",
                      height: "110vh",
                  }}>
                hello
            </Grid>
            <Grid item xs={9}>
                <ChatBox
                    messages={messages}
                    userId={1}
                    onSendMessage={handleOnSendMessage}
                    width={"100vw"}
                    height={"100vh"}
                />
            </Grid>
        </Grid>
    );
}

export default Chat;
import * as React from 'react';
import Inbox from './LeftSideChat/Inbox'
import Grid from '@mui/material/Grid';

// TODO:
/*
    1 . MyProfile bar with search button
    2.  Back to Matches pages
    3.  message box:
    3.1 picture
    3.2 name
    3.3 last message
 */

function Chat() {

    // fetch('http://132.64.33.7:4000/conversations/user1')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    return (
        <Grid container spacing={2}
              style={{}}>
            <Grid item
                  xs={3}
                  style={{
                      borderRight: "1px solid black",
                      height: "110vh",

                  }}>
                <Inbox fullname={"MyName"} profilePicture={"PATH"}/>

            </Grid>

            <Grid item xs={9}>
                hello2
            </Grid>
        </Grid>
    );
}

export default Chat;
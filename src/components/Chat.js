import * as React from 'react';
import Inbox from './LeftSideChat/Inbox'
import Grid from '@mui/material/Grid';
function Chat() {

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
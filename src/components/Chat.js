import * as React from 'react';
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
                hello
            </Grid>
            <Grid item xs={9}>
                hello2
            </Grid>
        </Grid>
    );
}

export default Chat;
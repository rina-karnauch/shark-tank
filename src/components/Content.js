import './Content.css';
import * as React from 'react';
import sharkTankLogo from '../images/SharkTankWithText.png'
import {Container} from '@mui/material';
import {AccountBox} from "./AccountBox"
import Grid from '@mui/material/Grid';

function Content() {
    return (
        <Container className='content-container'
                   style={{}}>
            <Grid container>
                <Grid item xs={12}
                      style={{
                          padding: '30px',
                          paddingLeft: '20px',
                          textAlign: 'left'
                      }}>
                    <img src={sharkTankLogo}></img>
                </Grid>
                {/*<Grid item xs={8}*/}
                {/*      style={{*/}
                {/*          borderBottom: '1px solid black',*/}
                {/*          borderRight: '1px solid black',*/}
                {/*          padding: '20px',*/}
                {/*      }}/>*/}
                {/*<Grid item xs={4}*/}
                {/*      style={{*/}
                {/*          borderBottom: '1px solid black',*/}
                {/*          borderRight: '1px solid black',*/}
                {/*          padding: '20px',*/}
                {/*      }}>*/}
                {/*</Grid>*/}
                <Grid item xs={12} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <AccountBox/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Content;
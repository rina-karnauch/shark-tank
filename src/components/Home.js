import './Content.css';
import * as React from 'react';
import {Container} from '@mui/material';
import {Header} from './Header';
import Footer from "./Footer";

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <Container className='content-container'>
                hello
                {
                    // replace with information about the system

                }
            </Container>
            <Footer/>
        </React.Fragment>
        // IGNORE THAT IM SAVING THIS FOR MYSELF
        // <Container className='content-container'
        //            style={{}}>
        //     <Header/>
        //     <Grid container>
        //         <Grid item xs={12}
        //               style={{
        //                   backgroundBolor:'black',
        //                   padding: '30px',
        //                   paddingLeft: '20px',
        //                   textAlign: 'left'
        //               }}>
        //
        //         </Grid>
        //         {/*<Grid item xs={8}*/}
        //         {/*      style={{*/}
        //         {/*          borderBottom: '1px solid black',*/}
        //         {/*          borderRight: '1px solid black',*/}
        //         {/*          padding: '20px',*/}
        //         {/*      }}/>*/}
        //         {/*<Grid item xs={4}*/}
        //         {/*      style={{*/}
        //         {/*          borderBottom: '1px solid black',*/}
        //         {/*          borderRight: '1px solid black',*/}
        //         {/*          padding: '20px',*/}
        //         {/*      }}>*/}
        //         {/*</Grid>*/}
        //         <Grid item xs={12} style={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //         }}>
        //
        //         </Grid>
        //     </Grid>
        // </Container>
    );
}

export default Home;
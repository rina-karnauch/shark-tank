import './Content.css';
import './Home.css';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Container} from '@mui/material';
import {Header} from './Header';
import Footer from "./Footer";
// import {useTransition, animated, config} from 'react-spring'

import students1 from '../images/students/students1.png'
import students2 from '../images/students/students2.png'
import students3 from '../images/students/students3.png'

function Home() {

    const [currentImage, setCurrentImage] = useState(null);

    const images = [students1, students2, students3];

    // const transitions = useTransition(indexImg, null, {
    //     from: {opacity: 0},
    //     enter: {opacity: 1},
    //     leave: {opacity: 0},
    //     config: config.molasses,
    // });

    // // changing every 2 seconds
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    //     }, 2000)
    //
    //     return () => clearInterval(intervalId);
    // }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 1500)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <React.Fragment>
            <Header/>
            <Container className='content-container'>
                <h2 className="h2-big">FIND THE BEST WORK PARTNER</h2>
                <div>
                    <img className="fading-images"
                         src={currentImage}
                         alt="student-photo"
                         style={{
                             position:"absolute",
                             top:"250px",
                             left:"650px",
                         }}
                    />
                </div>
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
        //s
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
import './Content.css';
import './Home.css';
import * as React from 'react';
import {Container, Grid} from '@mui/material';
import {Header} from './Header';
import Footer from "./Footer";

import students1 from '../images/students/students1.png'

function Home() {

    return (
        <React.Fragment>
            <Header/>
            <Container fixed>
                <Grid item xs={12}>
                    <img className="students-image"
                         src={students1}
                         alt="student-photo"
                         style={{
                             float:"right",
                         }}
                    />
                    <h2 className="h2-big">
                        FIND THE <br/> BEST SHARK
                    </h2>

                </Grid>

                <Grid item xs={12}>
                    <div className="borderHR"/>
                </Grid>
                <Grid item xs={12}>
                    <h1 className="h1-big">
                        <b> SharkTank is not just a matching app.</b> <br/>
                        You deserve to find the best shark partner for you in the aquarium,
                        so join us and start hunting<br/>
                    </h1>
                </Grid>
                <Grid item xs={12}>
                    <div className="join-box"/>
                </Grid>
                <Grid item xs={12}>
                    <div className="h1-info">
                        This site was created by Rina Karnauch, Ido Pinto, Yohai Shohet, Israel Ben David and Daniel Perretz with
                        the assistance of Eliran from Lightricks. We love you🧚🏻.
                        <br/>
                        All Rights Reserved © 2022
                    </div>
                </Grid>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;
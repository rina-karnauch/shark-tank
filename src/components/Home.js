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
                    <h2 className="h2-big">
                        FIND THE <br/> BEST SHARK
                    </h2>
                </Grid>
                <Grid item xs={12}>
                    <div className="borderHR"/>
                </Grid>
                <Grid item xs={12}>
                    <h1 className="h1-big">
                        SharkTank is not just a matching app. <br/>
                        You deserve to find the best shark partner for you in the aquarium. <br/>
                    </h1>
                </Grid>
                <Grid item xs={12}>
                    <div className="join-box"/>
                </Grid>
                <img className="students-image"
                     src={students1}
                     alt="student-photo"
                     style={{
                         position:"sticky",
                         left:900,
                         bottom:100,
                         zIndex: "2",
                     }}
                />
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;
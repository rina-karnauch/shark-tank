import * as React from 'react';
import noam from '../images/noam.png'
import chwik from '../images/itamar_cwik.png'
import shoken from '../images/Shimon_Schocken.png'
//import react, {useState} from "react";
import TinderCard from "react-tinder-card";
import swipe from "react-tinder-card";
// import TinderCard from '../react-tinder-card/index';

import SwipeButtons from "./SwipeButtons"
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import react, {useState, useMemo, useRef} from 'react'

import "./SwipeButtons.css"
import "./Card.css"


let IMAGE_WIDTH = "300px"
let IMAGE_HEIGHT = "400px"

//const [users, setUsers] = useState([
const users = [{
    //const [courses] = useState(["Linear Algebra 1", "Linear Algebra 2"]),
    name: "Itamar Chwik",
    //Courses: setCourses([...courses,"Linear Algebra 1", "Linear Algebra 2"]),
    courses: new Set("Linear Algebra 1", "Linear Algebra 2"),
    course: "Linear Algebra 1",
    pic: chwik,
    description: "I'm not a Lair. I'm a mathematician!",
    year: 1,
},
    {
        name: "Shimon Shoken",
        //Courses: setCourses([...courses,"Nand to Tetris"]),
        courses: new Set("Nand to Tetris"),
        course: "Nand to Tetris",
        pic: shoken,
        description: "High Tech, Schmai Tech,\n" +
            "The most important thing is to be a mentch!",
        year: 2,
    },
    {
        name: "Noam  Nisan",
        courses: new Set("Nand to Tetris",
            "Introduction To Mathematical Logic for Programming - Oriented Students"),
        course: "Nand to Tetris",
        //Courses: setCourses([...courses,"Nand to Tetris",
        //    "Introduction To Mathematical Logic for Programming - Oriented Students"]),
        pic: noam,
        description: "I think we should also confess, " +
            "that our simulator is not that efficient",
        year: 2,
    }
];

function Card() {
    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(users.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < users.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < users.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
// function yearSource(year){
//     return (year==1?LooksOneIcon:year==2?LooksTwoIcon:year==3?Looks3Icon:year==4?Looks4Icon:null);
//     // if(year == 1){
//     //     return(LooksOneIcon);
//     // }
//     // if(year == 2){
//     //     return(LooksTwoIcon);
//     // }
//     // if(year == 3){
//     //     return(Looks3Icon);
//     // }
//     // if(year == 4){
//     //     return(Looks4Icon);
//     // }
// }


    //const [courses, setCourses]= useState([]);

    // const canSwipe = currentIndex >= 0
    // const swipe = async (dir) => {
    //     if (canSwipe && currentIndex < db.length) {
    //         await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    //     }
    // }
    // setUsers([...users, 'chwik', 'shimon'])
    return (
        /**card*/
        // <div>
        //     <img className="User_image" src={chwik}
        //          style={{
        //              position: 'absolute',
        //              left: '50%',
        //              top: '20%',
        //              border: "2px solid black",
        //              height: IMAGE_HEIGHT,
        //              width: IMAGE_WIDTH,
        //              }}>
        //     </img>
        // </div>


        <div>
            {/*<img className="User_image" src={ocean}*/}
            {/*     style={{*/}
            {/*         position: 'sticky',*/}
            {/*         top: '0%',*/}
            {/*         border: "2px solid black",*/}
            {/*         height: "100vh",*/}
            {/*         width: "100vw",*/}
            {/*     }}>*/}
            {/*</img>*/}
            <div className="userCards__cardContainer">
                {users.map((user, index) => (

                    <TinderCard
                        ref={childRefs[index]}
                        className="swipe"
                        key={user.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, user.name, index)}
                        onCardLeftScreen={() => outOfFrame(user.name, index)}
                    >

                        <div style={{
                            borderRadius:"1px solid #FAFAFA",
                            backgroundImage: `url(${user.pic})`,
                        }}
                             className="card">
                            <h3>{user.name}</h3>
                        </div>
                        {/*<IconButton className ="swipeButtons__info" onClick={()=>{}}>*/}
                        {/*    <InfoRoundedIcon style={{*/}
                        {/*        fontSize: "30px",*/}
                        {/*        // left: "100%",*/}
                        {/*        // top: "20%",*/}
                        {/*        color: "grey",*/}
                        {/*    }}/>*/}
                        {/*</IconButton>*/}

                        <div class="course">
                            Course: {user.course}
                        </div>
                    </TinderCard>
                ))}
                {/*{*/}
                {/*    (users.length > 0) ?  : null*/}
                {/*}*/}
                <div className="swipeButtons" >
                    {/*<button onClick={() => swipe("left")}>swipe left</button>*/}

                    <IconButton className="swipeButtons__left"
                                onClick={() => swipe("left")}>
                        {/*const GradientOpenWithIcon = () => (*/}
                        <>
                            <svg width={0} height={0}>
                                <linearGradient id="linearColors1" x1={1} y1={0} x2={1} y2={1}>
                                    <stop offset={0} stopColor="rgba(240,0,0,1)"/>
                                    <stop offset={1} stopColor="rgba(160,10,100,1)"/>
                                </linearGradient>
                            </svg>
                            <HighlightOffRoundedIcon sx={{fill: "white"}} style={{fontSize: "90px",
                            }}/>
                        </>
                    </IconButton>
                    <IconButton className="swipeButtons__right"
                                onClick={() => {
                                    swipe();
                                }}>
                        <>
                            <svg width={0} height={0}>
                                <linearGradient id="linearColors2" x1={1} y1={0} x2={1} y2={1}>
                                    <stop offset={0} stopColor="rgba(10,230,30,1)"/>
                                    <stop offset={1} stopColor="rgba(40,160,20,1)"/>
                                </linearGradient>
                            </svg>
                            <CheckCircleOutlineRoundedIcon sx={{fill: "white"}} style={{fontSize: "90px",}}/>
                        </>
                    </IconButton>
                </div>
            </div>
        </div>

    );
}


export default Card;
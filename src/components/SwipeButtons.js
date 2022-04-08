import react from 'react'
import "./SwipeButtons.css"
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';


const SwipeButtons = ({swipe}) => {
    return (
        <div className="swipeButtons">
            <IconButton onClick={()=>swipe("left")} className= "swipeButtons__left">
                <HighlightOffRoundedIcon style={{fontSize: "600px",}}/>
            </IconButton>
            <IconButton className= "swipeButtons__right">
                <CheckCircleOutlineRoundedIcon style={{fontSize: "100px",}}/>
            </IconButton>

        </div>
    )
}

export default SwipeButtons
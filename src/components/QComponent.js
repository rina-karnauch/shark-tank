import * as React from "react";
import CourseForm from './CourseForm.js';
import TimePicker from './TimePicker.js';

import {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function QComponent() {
    const [arrayOfCourses, addCourse] = useState([]);
    const [courseName, setCourseName] = useState("");

    const handleDelete = (index) => {
        addCourse((arrayOfCourses) =>
            arrayOfCourses.filter((courseName, i) => i !== index)
        );
    }

    const newCourse = () => {
        addCourse(arrayOfCourses => arrayOfCourses.concat(courseName));
        setCourseName('')
    }
    const courses = arrayOfCourses.map((h, i) => (
        <CourseForm
            key={i}
            courseName={h}
        />
    ));

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <button type="button"
                        style={{width:"100px",
                            background:"transparent",
                            marginLeft:"10px",
                            border:"1px solid white",
                            height:"110vh"}}
                        onClick={() => {window.location.assign("http://localhost:3000/c");}}>
                    ⏮
                    Next Page
                </button>
            </Grid>
            <Grid item xs={4} style={{height: "110vh", padding:"50px"}}>
                <div>
                    {courses}
                    <TextField id="addExerciseField"
                               label="Course"
                               variant="standard"
                               onChange={(event) => {
                                   setCourseName(event.target.value);
                               }}
                               value={courseName}
                    style={{margin:"10px"}}/>
                    <IconButton aria-label="add"
                                style={{marginTop:"20px"}}
                                onClick={newCourse}>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
            </Grid>
            <Grid item xs={6} style={{height: "110vh"}} style={{
                textAlign: "center",
                marginTop:"50px",
            }}>
                <TimePicker/>
            </Grid>
        </Grid>
    );
}

export default QComponent;
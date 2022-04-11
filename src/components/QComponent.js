import * as React from "react";
import CourseForm from './CourseForm.js';
import TimePicker from './TimePicker.js';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import {useState} from "react";
import {Link} from "react-router-dom";

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
                <Link to="/shark-tank/c">
                    <button type="button"
                            style={{
                                width: "100px",
                                background: "transparent",
                                marginLeft: "10px",
                                border: "1px solid white",
                                height: "110vh"
                            }}>
                        ⏮
                        Next Page
                    </button>
                </Link>
            </Grid>
            <Grid item xs={4} style={{height: "110vh", padding: "50px"}}>
                <div>
                    {courses}
                    <TextField id="addExerciseField"
                               label="Course"
                               variant="standard"
                               onChange={(event) => {
                                   setCourseName(event.target.value);
                               }}
                               value={courseName}
                               style={{margin: "10px"}}/>
                    <IconButton aria-label="add"
                                style={{marginTop: "20px"}}
                                onClick={newCourse}>
                        <AddCircleIcon/>
                    </IconButton>
                </div>
            </Grid>
            <Grid item xs={6} style={{height: "110vh"}} style={{
                textAlign: "center",
                marginTop: "50px",
            }}>
                <TimePicker/>
            </Grid>
        </Grid>
    );
}

export default QComponent;
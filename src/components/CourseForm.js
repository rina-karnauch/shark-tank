import * as React from 'react';
import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';



const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);


function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
}


function CourseForm(props) {

    const [arrayOfHashtags, addHashtag] = useState([]);
    const [hashtag, setHashtag] = useState("");

    const handleDelete = (index) => {
        addHashtag((arrayOfHashtags) =>
            arrayOfHashtags.filter((hashtag, i) => i !== index)
        );
    }

    const newExercise = () => {
        addHashtag(arrayOfHashtags => arrayOfHashtags.concat(hashtag));
        setHashtag('')
        console.log(arrayOfHashtags);
    }
    const Hashtags = arrayOfHashtags.map((h, i) => (
        <Chip
            key={i}
            label={h}
            variant="outlined"
            value = {i}
            onDelete={() => handleDelete(i)}
        />
    ));


    const [checkedExercises, setCheckedExercises] = useState(false);

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.courseName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <RadioGroup name="use-radio-group"  id="bdika" >
                    <MyFormControlLabel value="all"
                                        label="All exercises"
                                        control={<Radio />}
                                        onChange={()=>setCheckedExercises(false)}
                    />
                    <MyFormControlLabel value="certain"
                                        label="Certain exercises"
                                        control={<Radio />}
                                        onChange={()=>{setCheckedExercises(true)}}
                    />
                    <Stack direction="row"
                           spacing={1}
                           id="exercisesPicker">
                        { checkedExercises ? <div>

                                <TextField id="addExerciseField" label="Standard" variant="standard"
                                           onChange={(event) => {
                                               setHashtag(event.target.value);
                                           }}
                                           value={hashtag}
                                />

                                <IconButton aria-label="add"  onClick={newExercise}>
                                    <AddCircleIcon />
                                </IconButton>
                                <Stack direction="row"
                                       spacing={2}
                                       id="exercisesPicker">
                                    {Hashtags}
                                </Stack>
                            </div>
                            : null}
                    </Stack>
                </RadioGroup>
                <FormControlLabel control={<Checkbox  />} label="campus" />
                <FormControlLabel control={<Checkbox  />} label="zoom" />

                <IconButton aria-label="delete" >
                    <DeleteIcon />
                </IconButton>
            </AccordionDetails>
        </Accordion>
    );
}

export default CourseForm;
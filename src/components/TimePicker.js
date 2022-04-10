import * as React from 'react';
import TimePickerDay from './TimePickerDay.js';
import TimePickerHours from './TimePickerHours.js';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export default function TimePicker() {
    return (
        <Grid container>
            <Stack direction="row"
                   spacing={1}
            >
                <TimePickerHours dayName={"Time"}/>
                <TimePickerDay dayName={"Sunday"}/>
                <TimePickerDay dayName={"Monday"}/>
                <TimePickerDay dayName={"Tuesday"}/>
                <TimePickerDay dayName={"Wednesday"}/>
                <TimePickerDay dayName={"Thursday"}/>
                <TimePickerDay dayName={"Friday"}/>
                <TimePickerDay dayName={"Saturday"}/>
            </Stack>
</Grid>
)
    ;
}

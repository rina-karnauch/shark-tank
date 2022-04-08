import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function TimePickerDay(props) {
    const [selected, setSelected] = React.useState(false);
    const [selected1, setSelected1] = React.useState(false);
    const [selected2, setSelected2] = React.useState(false);
    const [selected3, setSelected3] = React.useState(false);
    const [selected4, setSelected4] = React.useState(false);
    const [selected5, setSelected5] = React.useState(false);
    const [selected6, setSelected6] = React.useState(false);
    const [selected7, setSelected7] = React.useState(false);
    const [selected8, setSelected8] = React.useState(false);
    const [selected9, setSelected9] = React.useState(false);
    const [selected10, setSelected10] = React.useState(false);
    const [selected11, setSelected11] = React.useState(false);
    const [selected12, setSelected12] = React.useState(false);
    const [selected13, setSelected13] = React.useState(false);
    const [selected14, setSelected14] = React.useState(false);
    const [selected15, setSelected15] = React.useState(false);
    const [selected16, setSelected16] = React.useState(false);
    const [selected17, setSelected17] = React.useState(false);
    const [selected18, setSelected18] = React.useState(false);
    const [selected19, setSelected19] = React.useState(false);
    const [selected20, setSelected20] = React.useState(false);
    const [selected21, setSelected21] = React.useState(false);
    const [selected22, setSelected22] = React.useState(false);
    const [selected23, setSelected23] = React.useState(false);

    return (

        <div orientation="vertical">
            {props.dayName}
            <Paper component={Stack} direction="column" justifyContent="center">

                <ToggleButton color="primary" value="0" selected={selected} onChange={() => {setSelected(!selected);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected1} onChange={() => {setSelected1(!selected1);}}></ToggleButton>

                <ToggleButton color="primary" value="0" selected={selected2} onChange={() => {setSelected2(!selected2);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected3} onChange={() => {setSelected3(!selected3);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected4} onChange={() => {setSelected4(!selected4);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected5} onChange={() => {setSelected5(!selected5);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected6} onChange={() => {setSelected6(!selected6);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected7} onChange={() => {setSelected7(!selected7);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected8} onChange={() => {setSelected8(!selected8);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected9} onChange={() => {setSelected9(!selected9);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected10} onChange={() => {setSelected10(!selected10);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected11} onChange={() => {setSelected11(!selected11);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected12} onChange={() => {setSelected12(!selected12);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected13} onChange={() => {setSelected13(!selected13);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected14} onChange={() => {setSelected14(!selected14);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected15} onChange={() => {setSelected15(!selected15);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected16} onChange={() => {setSelected16(!selected16);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected17} onChange={() => {setSelected17(!selected17);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected18} onChange={() => {setSelected18(!selected18);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected19} onChange={() => {setSelected19(!selected19);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected20} onChange={() => {setSelected20(!selected20);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected21} onChange={() => {setSelected21(!selected21);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected22} onChange={() => {setSelected22(!selected22);}}></ToggleButton>
                <ToggleButton color="primary" value="0" selected={selected23} onChange={() => {setSelected23(!selected23);}}></ToggleButton>

            </Paper>
        </div>
    );
}
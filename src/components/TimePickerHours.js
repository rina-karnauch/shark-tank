import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function TimePickerHours(props) {
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
                <Stack direction="column" spacing={1}>
                    <ToggleButton disabled>0</ToggleButton>
                    <ToggleButton disabled>1</ToggleButton>
                    <ToggleButton disabled>2</ToggleButton>
                    <ToggleButton disabled>3</ToggleButton>
                    <ToggleButton disabled>4</ToggleButton>
                    <ToggleButton disabled>5</ToggleButton>
                    <ToggleButton disabled>6</ToggleButton>
                    <ToggleButton disabled>7</ToggleButton>
                    <ToggleButton disabled>8</ToggleButton>
                    <ToggleButton disabled>9</ToggleButton>
                    <ToggleButton disabled>10</ToggleButton>
                    <ToggleButton disabled>11</ToggleButton>
                    <ToggleButton disabled>12</ToggleButton>
                    <ToggleButton disabled>13</ToggleButton>
                    <ToggleButton disabled>14</ToggleButton>
                    <ToggleButton disabled>15</ToggleButton>
                    <ToggleButton disabled>16</ToggleButton>
                    <ToggleButton disabled>17</ToggleButton>
                    <ToggleButton disabled>18</ToggleButton>
                    <ToggleButton disabled>19</ToggleButton>
                    <ToggleButton disabled>20</ToggleButton>
                    <ToggleButton disabled>21</ToggleButton>
                    <ToggleButton disabled>22</ToggleButton>
                    <ToggleButton disabled>23</ToggleButton>
                </Stack>
        </div>
    );
}
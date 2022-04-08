import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function TimePickerHours(props) {


    return (

        <div orientation="vertical">
            {props.dayName}
                <Stack direction="column">
                    <ToggleButton style={{height:'2px'}} disabled>0</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>1</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>2</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>3</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>4</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>5</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>6</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>7</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>8</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>9</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>10</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>11</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>12</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>13</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>14</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>15</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>16</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>17</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>18</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>19</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>20</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>21</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>22</ToggleButton>
                    <ToggleButton style={{height:'2px'}} disabled>23</ToggleButton>
                </Stack>
        </div>
    );
}
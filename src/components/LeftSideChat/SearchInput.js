import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// import Data from "./mock-data.json";

function SearchInput(){
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete/>
        </Stack>
    );
}

export default SearchInput;

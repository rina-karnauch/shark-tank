import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Data from "../mock-data.json";

function SearchInput(){
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
            />
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>
    );
}

export default SearchInput;

// {
//     Data.map((post) => (
//         <div key={post.id}>
//             <p>{post.title}</p>
//             <p>{post.author}</p>
//         </div>
//     ));
// }
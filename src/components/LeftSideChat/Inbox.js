import * as React from "react";
import PersonInboxItem from "./PersonInboxItem"
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import InputBase from '@mui/material/InputBase';
import Data from "./mock.json";
import {useState,useEffect} from "react";

//http://132.64.33.7:4000/conversations/eliran

// Plus Button
const StyledFab = styled(Fab)({
    backgroundColor: "rgba(161, 161, 161, 0.8)",
    position: "absolute",
    zIndex: 1,
    top: 30,
    left: 0,
    right: 0,
    margin: "0 auto",
    "&:hover": {
        backgroundColor: "rgba(161, 161, 161, 0.8)"
    }
});


function Inbox() {
    const [query, setQuery] = useState("");
    const [displayFilteredData, setDisplayFilteredData] = useState(Data);

    // let filteredData = Data;

    useEffect(() => {
        console.log(query);
         setDisplayFilteredData(Data.filter(student => (student.primary.toLowerCase()).includes(query.toLowerCase())));
    }, [query]);

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Top */}
            <AppBar position="sticky" color="primary" sx={{}}>
                {/* above part */}
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <Avatar alt="Profile Picture" src={"/static/images/avatar/5.jpg"} />
                    </IconButton>

                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>

                    <Box sx={{ flexGrow: 2}} />

                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>

                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Inbox*/}
            <Paper square sx={{ pb: "30px" }}>
                {/*title*/}
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{ p: 2, pb: 0 }}
                >
                    {/*<SearchInput/>*/}
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search...' }}
                        // onChange={event => handleChange(event)}
                        onChange={event => setQuery(event.target.value)}
                    />
                </Typography>

                <List sx={{mb: 2}}>
                    {
                        displayFilteredData.map(({id, primary, secondary, person}) =>
                            <PersonInboxItem id={id} primary={primary} secondary={secondary} person={person}/>)
                    }
                        {/*filteredData.map(({id, primary,secondary,person}) => {*/}
                        {/*    return <PersonInboxItem id={id} primary={primary} secondary={secondary} person={person}>*/}
                        {/*    </PersonInboxItem>;*/}
                        {/*})*/}
                </List>
            </Paper>
        </React.Fragment>
    );
}

export default Inbox;

import * as React from "react";
import PersonInboxItem from "./PersonInboxItem";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import Data from "./mock.json";
import {useState, useEffect} from "react";
import './Inbox.css';


function Inbox() {
    const [query, setQuery] = useState("");
    const [displayFilteredData, setDisplayFilteredData] = useState(Data);


    useEffect(() => {
        console.log(query);
        setDisplayFilteredData(Data.filter(student => (student.primary.toLowerCase()).includes(query.toLowerCase())));
    }, [query]);

    return (
        <React.Fragment>
            {/* Top */}
            <CssBaseline/>
            <AppBar
                position="sticky"
                color="primary"
                style={{
                    backgroundImage: "linear-gradient(to bottom right, #0a77dd 10%, #a5cbea)",
                    boxShadow: "none",
                    borderBottom: "1px solid rgb(240,240,240)",
                    borderRight: "1px solid rgb(250,250,250)",
                }}
            >
                {/* above part */}
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <Avatar style={{
                            border: "2px solid white",
                            marginLeft: "-20px",
                        }}
                                alt="Profile Picture"
                                src={"/static/images/avatar/5.jpg"}/>
                    </IconButton>
                    {/*<Box sx={{flexGrow: 2}}/>*/}
                    {/*<IconButton style={{marginRight: "-15px"}}*/}
                    {/*            color="inherit"*/}
                    {/*            onClick={() => setShowSearch(!showSearch)}*/}
                    {/*>*/}
                    {/*    <SearchIcon/>*/}
                    {/*</IconButton>*/}
                </Toolbar>
            </AppBar>

            {/* chat */}
            <Paper square
                   elevation={0}
                   style={{
                       borderRight: "1px solid rgb(240,240,240)",
                       height: "100vh",
                   }}>
                {/*<div*/}
                {/*    style={{*/}
                {/*        padding: "10px",*/}
                {/*        backgroundColor: "#FAFAFA",*/}
                {/*        borderBottom: "1px solid #F1F1F1",*/}
                {/*        borderTop: "1px solid #F1F1F1",*/}
                {/*        color: "#848484",*/}
                {/*        fontSize: "20px",*/}
                {/*        display: "flex",*/}
                {/*        alignItems: "center",*/}
                {/*        justifyContent: "center",*/}
                {/*    }}>*/}
                {/*    <TiMessages*/}
                {/*        className="TiMsg"*/}
                {/*        style={{*/}
                {/*            fontSize: "60px",*/}
                {/*            marginRight: "10px",*/}
                {/*            borderRadius: "50%",*/}
                {/*            padding: "15px",*/}
                {/*            border: "2px solid #E6E6E6",*/}
                {/*        }*/}
                {/*        } onClick={() => {*/}
                {/*    }}/>*/}
                {/*    Discover New Matches*/}
                {/*</div>*/}
                {/*search or just discovering*/}
                {/*{showSearch ? <Typography*/}
                {/*        variant="h5"*/}
                {/*        gutterBottom*/}
                {/*        component="div"*/}
                {/*        sx={{p: 2, pb: 2}}*/}
                {/*        style={{*/}
                {/*            margin: 0,*/}
                {/*            backgroundColor: "#FAFAFA",*/}
                {/*            borderBottom: "1px solid #F1F1F1"*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <InputBase*/}
                {/*            style={{color: "#848484", padding: "8px",}}*/}
                {/*            sx={{ml: 0, flex: 0}}*/}
                {/*            placeholder="Search..."*/}
                {/*            inputProps={{'aria-label': 'search...'}}*/}
                {/*            // onChange={event => handleChange(event)}*/}
                {/*            onChange={event => setQuery(event.target.value)}*/}
                {/*        />*/}
                {/*    </Typography> :*/}
                {/*    null*/}
                {/*}*/}
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{p: 1, pb: 1}}
                    style={{
                        margin: 0,
                        backgroundColor: "#FAFAFA",
                        borderBottom: "1px solid #F1F1F1"
                    }}
                >
                    <div style={{
                        position: "relative",
                        top: 5,
                        color:"rgb(68,106,164)",
                        float: "left",
                    }}>
                        <SearchIcon
                        />
                    </div>
                    <InputBase
                        style={{color: "#848484", padding: "0px 8px",}}
                        sx={{ml: 0, flex: 0}}
                        placeholder="Search..."
                        inputProps={{'aria-label': 'search...'}}
                        // onChange={event => handleChange(event)}
                        onChange={event => setQuery(event.target.value)}
                    />
                </Typography>
                <List sx={{mb: 2}}>
                    {
                        displayFilteredData.map(({id, primary, secondary, person}) =>
                            <PersonInboxItem id={id} primary={primary} secondary={secondary} person={person}/>)
                    }
                </List>
            </Paper>
        </React.Fragment>
    );
}

export default Inbox;
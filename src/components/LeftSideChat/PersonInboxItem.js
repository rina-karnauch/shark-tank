import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";


function PersonInboxItem(props) {
    return (
        <React.Fragment key={props.id}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={props.person} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.primary}
                    //{"Name" + " " + " #Course"}
                    secondary={props.secondary}
                />
            </ListItem>
        </React.Fragment>
    );
}

export default PersonInboxItem;


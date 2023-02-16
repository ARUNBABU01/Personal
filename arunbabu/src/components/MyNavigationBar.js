import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { List, ListItemButton,ListItemIcon, ListItemText, Collapse, Tooltip } from "@mui/material";
import {Edit, Home, Assignment} from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const StyledList = styled(List)({
    "&& .Mui-selected, && .Mui-selected:hover":{
        backgroundColor:"#3f51b5",
        "&, ^ .MuiListItemIcon-root":{
            color:"#ffffff",
        }
    },
    "^ .MuiListItemButton-root:hover":{
        backgroundColor:"blue",
        "&, & .MuiListItemIcon-root":{
            color:"#000000",
        },
    }
})

function MyNavigationBar(){
    const location = useLocation();
    const [open,setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState("Home");

    let menu =[
        { text:"Home", icon:<Home />, target:"/home" },
        { text:"About", icon:<Home />, target:"/home" },
        { text:"Skills", icon:<Home />, target:"/home" },
        { text:"Experience", icon:<Home />, target:"/home" },
        { text:"Education", icon:<Home />, target:"/home" },
        { text:"Certification/Honors", icon:<Home />, target:"/home" },
        { text:"Projects", icon:<Home />, target:"/home" },
        { text:"Contact", icon:<Home />, target:"/home" },

    ]

    const handleClick = () => {
        setOpen(!open);
    }

    useEffect( () => {
        if(location.pathname === "/"){
            setCurrentPage("/home");
        } else {
            setCurrentPage(location.pathname)
        }

    },[location])

    return (
        <StyledList key="styleNavList">
            <List key="navItemsList">
                {menu.map((myMenu,index) => {
                    return (
                        <ListItemButton
                        key={myMenu.text + index}
                        component={Link}
                        to={myMenu.text}
                        data-testid={"Tab-" + myMenu.text}
                        selected={myMenu.target === currentPage ? true : false}>
                            <ListItemIcon key={"Icon" + myMenu.text + index}>
                                <Tooltip title={myMenu.text}>{myMenu.icon}</Tooltip>
                            </ListItemIcon>
                            <ListItemText
                            key={"Text"+myMenu.text + index}
                            primary={myMenu.text}
                            />

                        </ListItemButton>
                        
                    )
                })}
            </List>
        </StyledList>
    )
}

export default MyNavigationBar;
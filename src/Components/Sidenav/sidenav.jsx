import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import NewsIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import Logo from "../../Assets/NST-logo.png";
import { useState } from "react";
import { selecValue } from "../../Redux/Slices/slice1";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const Sidenav = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.input.data);
  return (
    <div>
      <CssBaseline>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              paddingTop: "10px",
              // marginBottom: "0",
            }}
          >
            <img
              style={{ height: "70px", width: "160px" }}
              src={Logo}
              alt="logo"
            />
          </div>
          <div>
            <Toolbar />
            <Divider
              sx={{
                background:
                  "linear-gradient(to right, transparent, #C21807, transparent)",
                height: 3,
              }}
            />
            <List sx={{ marginTop: "35px" }}>
              {[
                { text: "Dashboard", icon: <DashboardIcon /> },
                { text: "Calendar", icon: <CalendarIcon /> },
                { text: "News", icon: <NewsIcon /> },
                { text: "Logout", icon: <LogoutIcon /> },
              ].map((item, index) => (
                <ListItem key={item.text}>
                  <ListItemButton
                    variant="contained"
                    sx={{
                      backgroundColor: data === index ? "#EA3C53" : "",
                      borderRadius: "5px",
                      " &:focus": {
                        backgroundColor: "#EA3C53",
                      },
                    }}
                    onClick={(event) => {
                      event.persist();
                      dispatch(selecValue(index));
                      console.log("type", data);
                    }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography sx={{ color: "white", fontSize: "16px" }}>
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </CssBaseline>
    </div>
  );
};

export default Sidenav;

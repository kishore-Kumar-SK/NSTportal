import React from "react";
import Sidenav from "../Components/Sidenav/sidenav";
import Topnav from "../Components/Topnav/topnav";

const maindiv = {
  height: "100vh",
  overflow: "auto",
  backgroundColor: "#c0c0c0",
  display: "flex",
  position: "relative",
};

const sidenavStyle = {
  background: "linear-gradient(to bottom, #3B3B3B, #000000)",
  margin: "16px",
  width: "250px",
  borderRadius: "10px",
};
const dashcontent = {
  borderRadius: "10px",
  marginTop: "16px",
  marginBottom: "16px",
  marginRight: "16px",
  backgroundColor: "#ffffff",
  flex: 1,
};

const Dashboard = () => {
  return (
    <div style={maindiv}>
      <div style={sidenavStyle}>
        <Sidenav style={{ width: "250px" }} />
      </div>
      <div style={dashcontent}>
        <Topnav />
      </div>
    </div>
  );
};

export default Dashboard;

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const JorunalLayout = ({ children }) => {
	return (
		<Box
			sx={{ display: " flex" }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			{/* Navbar */}
			<Navbar drawerWidth={drawerWidth} />

			{/* Sidebar */}
			<SideBar drawerWidth={drawerWidth} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

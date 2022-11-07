import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {
	const { displayName } = useSelector((state) => state.auth);
	const { notes } = useSelector((state) => state.journal);
	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open={true}
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{notes.map((note) => (
						<SideBarItem key={note.id} {...note}></SideBarItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

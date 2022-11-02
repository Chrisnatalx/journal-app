import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 250 }) => {
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined></MenuOutlined>
				</IconButton>

				<Grid
					container
					direction="row"
					justifyContent="space-around"
					alignItems="center"
				>
					<Typography variant="h6" noWrap component="div">
						JournalApp
					</Typography>
					<IconButton color="error" onClick={onLogout}>
						<LogoutOutlined></LogoutOutlined>
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import { ImageGalery } from "../components/ImageGalery";

export const NoteView = () => {
	return (
		<Grid
			className="animate__animated animate__fadeIn animate__faster"
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					20 de octubre, 2022
				</Typography>
			</Grid>
			<Grid item>
				<Button color="primary" sx={{ p: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un titulo"
					label="Titulo"
					sx={{ border: "none", mb: 1 }}
				></TextField>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="Que sucedio en el dia de hoy?"
					minRows={5}
				></TextField>
			</Grid>

			{/* Galeria de imagenes */}
			<ImageGalery />
		</Grid>
	);
};

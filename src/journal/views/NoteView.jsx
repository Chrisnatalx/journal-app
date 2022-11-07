import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import {
	startDeletingNote,
	startSaveNote,
	startUploadingFiles,
} from "../../store/journal/thunks";
import { ImageGalery } from "../components/ImageGalery";
import "sweetalert2/dist/sweetalert2.css";
import { useRef } from "react";

export const NoteView = () => {
	const dispatch = useDispatch();
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector((state) => state.journal);

	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date]);

	const fileInputRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire("Nota actualizada", messageSaved, "success");
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};
	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;
		dispatch(startUploadingFiles(target.files));
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

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
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<input
					type="file"
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: "none" }}
				/>
				<IconButton
					color="primary"
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined></UploadOutlined>
				</IconButton>
				<Button
					disabled={isSaving}
					onClick={onSaveNote}
					color="primary"
					sx={{ p: 2 }}
				>
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
					name="title"
					value={title}
					onChange={onInputChange}
				></TextField>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="Que sucedio en el dia de hoy?"
					minRows={5}
					name="body"
					value={body}
					onChange={onInputChange}
				></TextField>
			</Grid>

			<Grid container justifyContent="end">
				<Button onClick={onDelete} sc={{ mt: 2 }} color="error">
					<DeleteOutline>borrar</DeleteOutline>
				</Button>
			</Grid>

			{/* Galeria de imagenes */}
			<ImageGalery images={note.imageUrls} />
		</Grid>
	);
};

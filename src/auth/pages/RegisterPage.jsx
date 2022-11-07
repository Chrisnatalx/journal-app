import { Google } from "@mui/icons-material";
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
	email: "",
	password: "",
	displayName: "",
};

const formValidations = {
	email: [(value) => value.includes("@"), "El correo debe de tener una @"],
	password: [
		(value) => value.length >= 6,
		"El password debe de tener mas de 6 letras",
	],
	displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);
	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		isFormValid,
		emailValid,
		passwordValid,
		displayNameValid,
	} = useForm(formData, formValidations);

	const onSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;
		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<AuthLayout title="Crear cuenta">
			<form
				onSubmit={onSubmit}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							name="displayName"
							value={displayName}
							onChange={onInputChange}
							label="Nombre Completo"
							type="text"
							placeholder="Nombre Completo"
							fullWidth
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							name="email"
							value={email}
							onChange={onInputChange}
							label="Correo"
							type="email"
							placeholder="correo@google.com"
							fullWidth
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							name="password"
							value={password}
							onChange={onInputChange}
							label="Contrasena"
							type="password"
							placeholder="contrasena"
							fullWidth
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isCheckingAuthentication}
								type="submit"
								variant="contained"
								fullWidth
							>
								Crear Cuenta
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" fullWidth>
								<Google>
									<Typography sx={{ ml: 1 }}>Google</Typography>
								</Google>
							</Button>
						</Grid>
						<Grid container direction="row" justifyContent="end" mt={1}>
							<Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
							<Link component={RouterLink} color="inherit" to="/auth/login">
								Ingresar
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

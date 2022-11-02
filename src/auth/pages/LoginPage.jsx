import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
	startGoogleSingIn,
	startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm({
		email: "fernando@google.com",
		password: "123456",
	});

	const isAuthenticating = useMemo(() => status === "checking", [status]);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log({ email, password });
		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const onGoogleSingIn = () => {
		dispatch(startGoogleSingIn());
	};

	return (
		<AuthLayout title="Login">
			{" "}
			<form
				onSubmit={onSubmit}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Corre"
							type="email"
							placeholder="correo@google.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contrasena"
							type="password"
							placeholder="contrasena"
							fullWidth
							name="password"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>

					<Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
						<Grid item xs={12}>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								variant="contained"
								fullWidth
								type="submit"
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								onClick={onGoogleSingIn}
								variant="contained"
								fullWidth
							>
								<Google>
									<Typography sx={{ ml: 1 }}>Google</Typography>
								</Google>
							</Button>
						</Grid>
						<Grid container direction="row" justifyContent="end">
							<Link component={RouterLink} color="inherit" to="/auth/register">
								Crear una cuenta
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	singInWithGoogle,
} from "../../firebase/providers";
import { checkinCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkinCredentials());
	};
};

export const startGoogleSingIn = () => {
	return async (dispatch) => {
		dispatch(checkinCredentials());

		const result = await singInWithGoogle();
		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkinCredentials());
		const result = await registerUserWithEmailPassword({
			email,
			password,
			displayName,
		});
		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkinCredentials());
		const result = await loginWithEmailPassword({
			email,
			password,
		});
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await logoutFirebase();
		dispatch(logout());
	};
};

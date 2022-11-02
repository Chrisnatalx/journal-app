import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks";
import { JournalRoutes } from "../journal/rutes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === "checking") {
		return <CheckingAuth />;
	}

	return (
		<Routes>
			{status === "authenticated" ? (
				<Route path="/*" element={<JournalRoutes />} />
			) : (
				<Route path="/auth/*" element={<AuthRoutes />} />
			)}
			<Route path="/*" element={<Navigate to="/auth/login" />} />
			{/* Login y Registro */}
			{/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
			{/* Journal App */}
			{/* <Route path="/*" element={<JournalRoutes />} /> */}
			<Route />
		</Routes>
	);
};

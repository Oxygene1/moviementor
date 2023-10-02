import {useRoutes} from "react-router-dom";
import Landingpage from "../pages/landingpage/landingpage";
import {LoginScreen} from "../pages/login";

export const Routes = () => {
	const route = useRoutes([
		{path: "/", element: <Landingpage />},
		{path: "/login", element: <LoginScreen />},
	]);
	return route;
};

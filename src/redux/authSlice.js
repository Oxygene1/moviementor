import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	token: "",
	email: "",
	userName: "",
	password: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUserValues: (state, action) => {
			state.token = action.payload.token;
			state.email = action.payload.email;
			state.userName = action.payload.username;
			localStorage.setItem("token", state.token);
		},
		setLoginEmailValues: (state, action) => {
			state.email = action.payload.email;
			localStorage.setItem("email", state.email);
		},
		setLoginUserNameValues: (state, action) => {
			state.userName = action.payload.username;
			localStorage.setItem("username", state.userName);
		},
	},
});

export const {setUserValues, setLoginEmailValues, setLoginUserNameValues} =
	authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		modifyUser: null,
		users: [],
		status: {},
		error: null,
	},
	reducers: {
		resetStatus: (state, action) => {},
	},
	extraReducers(builder) {

	},
});


export const userReducer = userSlice.reducer;

export const { resetStatus } = userSlice.actions;

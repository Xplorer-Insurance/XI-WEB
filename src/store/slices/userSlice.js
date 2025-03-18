import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../thunks/users-thunks";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		modifyUser: null,
		users: [],
		status: {
			allUsers: 'idle',
		},
		error: null,
	},
	reducers: {
		resetStatus: (state) => {
			state.status.allUsers = 'idle';
		},
	},
  extraReducers(builder) {
    builder.addCase(allUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status.allUsers = 'success';
    });
    builder.addMatcher(
      (action) => action.type.endsWith('users/pending'),
      (state, action) => {
        const key = action.type.split('/')[0];
        state.status[key] = 'loading';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('users/failed'),
      (state, action) => {
        const key = action.type.split('/')[0];
        state.status[key] = 'failed';
      }
    );
  },
});


export const userReducer = userSlice.reducer;

export const { resetStatus } = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { addUsersByFile } from "../thunks/files-thunks";

const filesSlice = createSlice({
  name: "files",
  initialState: {
    file: null,
    files: [],
    status: {
      addUsersByFile: 'idle',
    },
    error: null,
  },
  reducers: {
    resetStatus: (state, action) => {},
  },
  extraReducers(builder) {
    builder.addCase(addUsersByFile.fulfilled, (state) => {
			state.status.addUsersByFile = "succeeded";
		});
    builder.addMatcher(
      (action) => action.type.endsWith('files/pending'),
      (state, action) => {
        // const key = action.meta.arg.info
        const key = action.type.split('/')[0];
        state.status[key] = 'loading';
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith('files/failed'),
      (state, action) => {
        const key = action.type.split('/')[0];
        state.status[key] = 'failed';
      }
    );
  },
});


export const filesReducer = filesSlice.reducer;

export const { resetStatus } = filesSlice.actions;

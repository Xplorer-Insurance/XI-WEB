import { createAsyncThunk } from "@reduxjs/toolkit";
import { postUsersByFile } from "../requests/files-requests";

export const addUsersByFile = createAsyncThunk(
  'addUsersByFile/files',
  async (body) => {
    const response = await postUsersByFile(body);
    return response;
  }
);
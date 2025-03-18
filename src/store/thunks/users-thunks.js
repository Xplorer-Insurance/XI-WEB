import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../requests/users-requests";

export const allUsers = createAsyncThunk(
  'allUsers/users',
  async () => {
    const response = await getUsers();
    return response;
  }
);
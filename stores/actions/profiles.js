import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../helper/axios';

export const getProfile = createAsyncThunk('/user', async (token) => {
  const result = {};
  try {
    const { data } = await axios(token).get('/user');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const getProfileById = createAsyncThunk('/user/profile/b6a795de-ff2f-4fd7-8829-3e842f35f251', async (token) => {
  const result = {};
  try {
    const { data } = await axios(token).get('/user/profile/b6a795de-ff2f-4fd7-8829-3e842f35f251');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});
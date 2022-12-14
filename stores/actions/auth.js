import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import axios from '../../helper/axios';

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await axios().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    result.token = data.results.token;
    return result;
  }
  catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await axios().post('/auth/register', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.error.data.message;
    return result;
  }
});
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../helper/axios';

export const getTransfer = createAsyncThunk('/transaction/history?page=1&limit=2&filter=MONTH', async (token) => {
  const result = {};
  try {
    const { data } = await axios({ headers: { 'Authorization': `Bearer ${token}` } }).get('/transaction/history?page=1&limit=2&filter=MONTH');
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});
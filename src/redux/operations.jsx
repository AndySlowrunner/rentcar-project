import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6557686cbd4bcef8b61294a7.mockapi.io';

export const fetchCars = createAsyncThunk(
  'adverts/fetchAll?page=1&limit=12',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page: 1,
          limit: 12
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
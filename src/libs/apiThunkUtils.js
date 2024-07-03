// apiThunkUtils.js
import {createAsyncThunk} from '@reduxjs/toolkit';

// Reusable function to create async thunk actions
export const createAsyncThunkAction = (name, asyncFunction) =>
  createAsyncThunk(name, async (arg, thunkAPI) => {
    try {
      const response = await asyncFunction(arg);
      if (response.error) {
        // If the API call returns an error, reject the promise with the error message
        return thunkAPI.rejectWithValue(response.error);
      }
      // If successful, return the data
      return response.data;
    } catch (error) {
      // If an exception occurs, reject the promise with a default error message
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  });

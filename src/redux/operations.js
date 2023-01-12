import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

export const fetchContacts = createAsyncThunk(
    "/contacts/fetchAll", async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/contacts`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact", async ({ name, number }, thunkAPI) => {
        console.log({ name, number })
        try {
            const response = await axios.post(`/contacts`, { name, number }) 
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk(
    "user/signup", async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", { name, email, password }) 
            token.set(response.data.token)
            return response.data
        } catch (e) {
            console.log(e)
            if (e.response.data.errors.email) { alert(e.response.data.errors.email.message) }
            if (e.response.data.errors.password) { alert(e.response.data.errors.password.message) }
            return thunkAPI.rejectWithValue(e.request.status)
        }
    }
)

// robert robert@bigmir.net 12345678

export const login = createAsyncThunk(
    "user/login", async ({ email, password }, thunkAPI) => {
        try {
            const response = await axios.post(`/users/login`, { email, password }) 
            token.set(response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.request.status)
        }
    }
)

export const logout = createAsyncThunk(
    "user/logout", async (thunkAPI) => {
        try {
            await axios.post(`/users/logout`) 
            token.unset()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
  'user/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.user.token === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(state.user.token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
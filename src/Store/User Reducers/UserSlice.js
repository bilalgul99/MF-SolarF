import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    loading: false,
    error: null
};

export const LogOut = createAsyncThunk("user/logout", async (userData) => {
    return userData
});



export const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
    return userData;
});

export const loginUser = createAsyncThunk("user/loginUser", async (userdata) => {
   return userdata;

});

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // login 
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });

        // logout cases 
        builder.addCase(LogOut.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });
        // regsiter 
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });
    }
});

export default UserSlice.reducer;
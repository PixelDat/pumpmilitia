import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserTypes {

}
interface AuthState {
    isAuthenticated: boolean;
    user: UserTypes | null; // Replace 'any' with your user type
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

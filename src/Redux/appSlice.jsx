import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        progress: 0,
    },
    reducers:  {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        }
    },
})

export const { toggleMenu, closeMenu, setProgress } = appSlice.actions;
export default appSlice.reducer;
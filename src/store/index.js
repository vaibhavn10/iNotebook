import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  progress: 0,
  alert: {msg:"Welcome to iNotebook.", color:"red"}
};

const noteSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProgress(state, action) {
        state.progress = action.payload;
    },
    setAlert(state, action) {
        state.alert = action.payload;
    },
  },
});

export const actions = noteSlice.actions;

export const store = configureStore({
  reducer: noteSlice.reducer,
});

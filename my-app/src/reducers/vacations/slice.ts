import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../../interfaces/store";

const DaysSlice = createSlice({
  name: "app",
  initialState: {
    days: 147,
    vacations: [],
  } as AppState,
  reducers: {
    decreaseDays: (state, action) => {
      state.days = state.days - action.payload;
    },
    setVacation: (state, action) => {
      state.vacations.push({ ...action.payload, id: state.vacations.length });
    },
    deleteVacation: (state, action) => {
      state.vacations = state.vacations.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const { decreaseDays, setVacation, deleteVacation } = DaysSlice.actions;

export default DaysSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../../interfaces/store"
// import { createAction as createApiAction } from "redux-api-middleware";

const DaysSlice = createSlice({
  name: "app",
  initialState: <AppState>{
    days: 147,
    vacations: []
  },
  reducers: {
    decreaseDays: (state, action) => {
      state.days = state.days - action.payload
    },
    setVacation: (state, action) => {
      state.vacations.push(action.payload)
    }
  }
});

export const {decreaseDays, setVacation} = DaysSlice.actions;

export default DaysSlice.reducer;

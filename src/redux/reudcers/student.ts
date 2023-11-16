import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authPhase : "1"
}

const studentSlice = createSlice({
    name: "student", initialState, reducers: {

    }
})

export default studentSlice.reducer;
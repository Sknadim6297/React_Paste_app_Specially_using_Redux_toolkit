import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    updateTopaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.pastes[index] = paste;
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted", { id: "unique-toast-id" });
      }
    },
    resetAllPaste: (state, action) => {},
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
  },
});

export const { addToPaste, resetAllPaste, removeFromPaste, updateTopaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type Node = {
  id: number;
  message: string;
};

const initialState: Node[] = [];

const NodeSlice = createSlice({
  name: "node",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = NodeSlice.actions;

export default NodeSlice.reducer;

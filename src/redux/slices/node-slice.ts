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
    addNode: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNode } = NodeSlice.actions;

export default NodeSlice.reducer;

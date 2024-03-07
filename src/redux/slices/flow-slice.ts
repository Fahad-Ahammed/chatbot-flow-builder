import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";

type FlowState = {
  nodes: Node[];
  edges: Edge[];
  id: number;
  initialPositionX: number;
};

const initialState: FlowState = {
  nodes: [],
  edges: [],
  id: 1,
  initialPositionX: 0,
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes.push(action.payload[0]);
      state.id += 1;
      state.initialPositionX += 350;
    },
    // setEdges: (state, action: PayloadAction<Edge[]>) => {
    //   state.edges.push(action.payload[0]);
    // },
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

export default flowSlice.reducer;
export const { setNodes, onNodesChange, onEdgesChange, onConnect } =
  flowSlice.actions;

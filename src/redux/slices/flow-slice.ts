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
  showNodesPanel: boolean;
  selectedNode: Node | null;
  showSaveModal: boolean;
};

const initialState: FlowState = {
  nodes: [],
  edges: [],
  id: 1,
  initialPositionX: 0,
  showNodesPanel: false,
  selectedNode: null,
  showSaveModal: false,
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
    updateNode: (state, action: any) => {
      const id = state.selectedNode?.id;
      const nodeToUpdate: Node = state.nodes.filter((node: Node) => {
        return id == node.id;
      })[0];
      if (nodeToUpdate) {
        nodeToUpdate.data = { ...nodeToUpdate.data, message: action.payload };
        state.nodes.push(nodeToUpdate);
      }
    },
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
    toggleNodesPanel: (
      state,
      action: PayloadAction<{ node: Node | null; toggleValue: boolean }>
    ) => {
      state.showNodesPanel = action.payload?.toggleValue;
      if (action.payload) {
        state.selectedNode = state.nodes.filter(
          (node: Node) => node.id == action.payload?.node?.id
        )?.[0];
      } else state.selectedNode = null;
    },
    handleModal: (state) => {
      state.showSaveModal = !state.showSaveModal;
    },
  },
});

export default flowSlice.reducer;
export const {
  setNodes,
  onNodesChange,
  toggleNodesPanel,
  onEdgesChange,
  onConnect,
  updateNode,
  handleModal,
} = flowSlice.actions;

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
  showSettingsPanel: boolean;
  selectedNode: Node | null;
  showSaveModal: boolean;
  validFlow: boolean;
};

const initialState: FlowState = {
  nodes: [],
  edges: [],
  showSettingsPanel: false,
  selectedNode: null,
  showSaveModal: false,
  validFlow: false,
};

const addNode = (previousNode?: Node): Node => {
  const id = previousNode ? `${Number(previousNode.id) + 1}` : "1";
  const message = previousNode
    ? `text message ${Number(previousNode.id) + 1}`
    : "text message 1";
  const position = previousNode
    ? { x: previousNode.position.x + 350, y: 0 }
    : { x: 0, y: 0 };

  return {
    id,
    data: { message },
    type: "custom",
    position,
  };
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    setNodes: (state) => {
      state.nodes.push(addNode(state.nodes[state.nodes.length - 1]));
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
    togglePanel: (
      state,
      action: PayloadAction<{ node: Node | null; toggleValue: boolean }>
    ) => {
      state.showSettingsPanel = action.payload?.toggleValue;
      if (action.payload) {
        state.selectedNode = state.nodes.filter(
          (node: Node) => node.id == action.payload?.node?.id
        )?.[0];
      } else state.selectedNode = null;
    },
    handleModal: (state) => {
      state.showSaveModal = !state.showSaveModal;
    },
    handleValidFlow: (state) => {
      const nodesWithEmptyTarget = state.nodes.filter((node) => {
        if (state.edges.length > 0) {
          const incomingEdges = state.edges.filter(
            (edge) => edge.target === node.id
          );
          return incomingEdges.length === 0;
        }
        return true;
      });
      state.validFlow = !(
        state.nodes.length > 1 && nodesWithEmptyTarget.length > 1
      );
    },
  },
});

export default flowSlice.reducer;
export const {
  setNodes,
  onNodesChange,
  togglePanel,
  onEdgesChange,
  onConnect,
  updateNode,
  handleModal,
  handleValidFlow,
} = flowSlice.actions;

"use client";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  onConnect,
} from "@/redux/slices/flow-slice";
import CustomNode from "@/app/components/node";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useState } from "react";

const nodeTypes = {
  custom: CustomNode,
};

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const nodes = useSelector((state: RootState) => state.flow.nodes);
  const edges = useSelector((state: RootState) => state.flow.edges);
  const [id, setId] = useState(1);
  const [initialPosition, setInitialPosition] = useState(0);

  const handleOnDrop = () => {
    dispatch(
      setNodes([
        {
          id: id.toString(),
          data: { message: "test message " + id.toString() },
          type: "custom",
          position: { x: initialPosition, y: 0 },
        },
      ])
    );
    setId(id + 1);
    setInitialPosition(initialPosition + 350);
  };

  const handleNodesChange = (changes: any) => {
    dispatch(onNodesChange(changes));
  };

  const handleConnect = (connection: any) => {
    dispatch(onConnect(connection));
  };

  return (
    <div
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={handleOnDrop}
      className="w-[75%] h-screen"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        // onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}

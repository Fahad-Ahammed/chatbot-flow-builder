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

const nodeTypes = {
  custom: CustomNode,
};

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { nodes, edges, id, initialPositionX } = useSelector(
    (state: RootState) => state.flow
  );

  const handleOnDrop = () => {
    dispatch(
      setNodes([
        {
          id: id.toString(),
          data: { message: "test message " + id.toString() },
          type: "custom",
          position: { x: initialPositionX, y: 0 },
        },
      ])
    );
  };

  const handleNodesChange = (changes: any) => {
    dispatch(onNodesChange(changes));
  };

  const handleConnect = (connection: any) => {
    // console.log(edges);
    let test: any = [];
    if (edges.length > 0) {
      test = edges.filter((eds: any) => {
        return connection.source == eds.source;
      });
    }
    if (test.length == 0) dispatch(onConnect(connection));
  };

  const handleEdgeChanges = (changes: any) => {
    dispatch(onEdgesChange(changes));
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
        onEdgesChange={handleEdgeChanges}
        onConnect={handleConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Index;

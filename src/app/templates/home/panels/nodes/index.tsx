"use client";
import Node from "@/app/components/node";
import { RootState, AppDispatch } from "@/redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNode } from "@/redux/slices/node-slice";

const NodesPanel = () => {
  const nodes = useSelector((state: RootState) => state.node);
  const dispatch = useDispatch<AppDispatch>();
  const handleOnDrop = () => {
    dispatch(addNode({ id: 1, message: "text message" }));
    console.log(nodes);
  };

  return (
    <div
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={handleOnDrop}
      className="w-[75%] h-screen flex justify-center items-center overflow-scroll "
    >
      {nodes.map((ele: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <Node>
              <div className="px-[15px] py-[10px]">{`${ele.message} ${
                index + 1
              }`}</div>
            </Node>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NodesPanel;

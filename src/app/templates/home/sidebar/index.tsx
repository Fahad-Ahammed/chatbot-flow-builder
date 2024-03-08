"use client";
import Message from "@/app/components/Message";
import { MdOutlineMessage } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleNodesPanel, updateNode } from "@/redux/slices/flow-slice";
import React, { useEffect, useState } from "react";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedNode, showSettingsPanel } = useSelector(
    (state: RootState) => state.flow
  );
  const [updatedMessage, setUpdatedMessage] = useState<any>("");
  useEffect(() => {
    setUpdatedMessage(selectedNode?.data.message);
  }, [selectedNode]);

  const handleChange = (e: any) => {
    setUpdatedMessage(e.target.value);
    dispatch(updateNode(e.target.value));
  };

  return (
    <div className="w-[25%] relative overflow-hidden border-l-[2px] border-t border-gray-300 h-screen">

      {/*Nodes panel start */}
      <div
        className={`absolute left-0 top-0 ${
          showSettingsPanel
            ? "translate-x-[100%] opacity-0 invisible "
            : "opacity-100 visible translate-x-0"
        } duration-300 ease-in-out w-full p-[15px] grid grid-cols-1 lg:grid-cols-2 gap-[5px] `}
      >
        <Message
          type="text"
          title="Message"
          icon={<MdOutlineMessage size={30} color="#5555c9" />}
        />
      </div>
      {/*Nodes panel end */}

      {/*Settings panel start */}
      <div
        className={`${
          showSettingsPanel
            ? "translate-x-0 opacity-100 visible "
            : "translate-x-[100%] opacity-0 invisible "
        } duration-300 ease-in-out absolute w-full  left-0 top-0 border-b-[2px] border-gray-300`}
      >
        <div className="border-b-[2px] relative border-gray-300 py-[10px] px-[15px] ">
          <FaArrowLeft
            onClick={() =>
              dispatch(toggleNodesPanel({ node: null, toggleValue: false }))
            }
            className="lg:absolute cursor-pointer lg:left-[15px] lg:top-[50%] lg:translate-y-[-50%] max-lg:mb-[15px]"
            color="gray"
          />
          <div className="text-center text-sm ">
            <span>Message</span>
          </div>
        </div>
        <div className="py-[20px] px-[15px]">
          <div>
            <span className="text-sm text-black/40 font-semibold">Text</span>
          </div>
          <textarea
            value={updatedMessage}
            onChange={handleChange}
            className="border-[2px] w-full text-sm h-[75px] focus:outline-none p-[10px] border-gray-300 mt-[10px] rounded-md"
            name="message"
            id="message"
          ></textarea>
        </div>
      </div>
      {/*Settings panel end */}
    </div>
  );
};

export default Index;

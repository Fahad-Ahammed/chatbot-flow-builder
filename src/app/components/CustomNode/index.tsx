import { Handle, Position } from "reactflow";
import { MdOutlineMessage } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { memo } from "react";

const CustomNode = ({ data }: any) => {
  return (
    <>
      <Handle
        id="output"
        type="target"
        position={Position.Left}
        className=" !bg-gray-600 !w-[12px] !h-[12px] !left-[-7px]"
      />
      <div className="rounded-md shadow-lg min-w-[300px] max-w-[400px] overflow-hidden ">
        <div className="px-[15px] py-[5px] bg-[#B3F0E3] border-b gap-x-[5px] items-center border-gray-300  flex ">
          <MdOutlineMessage size={12} color="#5555c9" />
          <p className="text-md font-bold text-black">Send Message</p>
          <div className="p-[5px] bg-white rounded-full ml-auto">
            <IoLogoWhatsapp size={13} color="#25D366" />
          </div>
        </div>
        {/* {data.children}  */}
        <div className="max-w-full p-[15px]">{data.message}</div>
      </div>
      <Handle
        id="input"
        type="source"
        position={Position.Right}
        className=" !bg-gray-600 !w-[12px] !h-[12px] !right-[-7px]"

      />
    </>
  );
};

export default memo(CustomNode);
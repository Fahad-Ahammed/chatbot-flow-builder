

import { MdOutlineMessage } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Node = (props:any) => {
  return (
    <div className="rounded-md shadow-lg min-w-[300px] overflow-hidden ">
      <div className="px-[15px] py-[5px] bg-[#B3F0E3] border-b gap-x-[5px] items-center border-gray-300  flex ">
        <MdOutlineMessage size={12} color="#5555c9" />
        <p className="text-md font-bold text-black">Send Message</p>
        <div className="p-[5px] bg-white rounded-full ml-auto">
          <IoLogoWhatsapp size={13} color="#25D366" />
        </div>
      </div>
      {props.children} {/* we can add different types of messages through children*/}
    </div>
  );
};

export default Node;

import Message from "@/app/components/messages";
import { MdOutlineMessage } from "react-icons/md";

const Index = () => {
  return (
    <div className="w-[25%] p-[10px] border-l border-gray-300 h-screen">
      <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-[5px]  ">
        <Message
          type="text"
          title="Message"
          icon={<MdOutlineMessage size={30} color="#5555c9"/>}
        />
      </div>
    </div>
  );
};

export default Index;

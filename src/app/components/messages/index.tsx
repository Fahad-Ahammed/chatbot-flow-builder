"use client";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setNodes } from "@/redux/slices/flow-slice";

const Message = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, initialPositionX } = useSelector(
    (state: RootState) => state.flow
  );
  const handleClick = () => {
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
  return (
    <div
      onClick={handleClick}
      draggable={true}
      className="border border-[#5555c9] h-fit w-full flex flex-col gap-y-[5px] py-[15px] rounded-md justify-center items-center cursor-pointer"
    >
      {props.icon} {/* we can add custom icons for different types of messages */}
      <p className="text-sm text-[#5555c9]/90 font-semibold">
        {props.title} {/* custom message title */}
      </p>
    </div>
  );
};

export default Message;

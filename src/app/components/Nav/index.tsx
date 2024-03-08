"use client";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { handleModal, handleValidFlow } from "@/redux/slices/flow-slice";

const Nav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showSaveModal, validFlow } = useSelector(
    (state: RootState) => state.flow
  );
  const handleClick = () => {
    dispatch(handleModal());
    dispatch(handleValidFlow());
    // if (validFlow) {
    // console.log("Flow saved"); // we can save the flow in backend here
    // } else console.log("cannot save flow");
    setTimeout(() => {
      dispatch(handleModal());
    }, 2000);
  };
  return (
    <>
      <div className="bg-[#F3F3F3] py-[10px] ">
        <button
          onClick={handleClick}
          className={`${
            showSaveModal ? "pointer-events-none" : ""
          } ml-auto block text-[#5555c9] font-bold px-[30px] py-[10px] rounded-md border border-[#5555c9] w-fit mr-[7%] bg-white`}
        >
          Save Changes
        </button>
      </div>
      <div
        className={` ${validFlow ? "bg-[#B3F0E3]" : "bg-red-200"} ${
          showSaveModal
            ? "top-[10px] opacity-100 visible"
            : "opacity-0 invisible top-[-100%]"
        } w-fit text-center duration-300 ease-in-out font-semibold fixed left-[45%] translate-x-[-50%]  py-[10px] px-[15px] rounded-xl text-lg`}
      >
        <span>{validFlow ? "Flow saved" : "Cannot save Flow"}</span>
      </div>
    </>
  );
};

export default Nav;

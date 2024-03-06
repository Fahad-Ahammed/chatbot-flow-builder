"use client";

const Index = (props: any) => {
  return (
    <div
      onClick={() => console.log("clicked")}
      draggable={true}
      className="border border-[#5555c9] h-fit w-full flex flex-col gap-y-[5px] py-[15px] rounded-md justify-center items-center cursor-pointer"
    >
      {props.icon}
      <p className="text-sm text-[#5555c9]/90 font-semibold">{props.title}</p>
    </div>
  );
};

export default Index;

"use client";

const Index = () => {
  return (
    <div
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={() => alert("dropped")}
      className="w-[75%] h-screen flex justify-center items-center "
    >
      Nodes panel
    </div>
  );
};

export default Index;

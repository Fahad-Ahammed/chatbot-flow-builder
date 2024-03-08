import SideBar from "./sidebar";
import FlowCanvas from "./flow-canvas";

const Home = () => {
  return (
    <div className="flex flex-1">
      <FlowCanvas />
      <SideBar />
    </div>
  );
};

export default Home;

import SideBar from "./sidebar";
import FlowCanvas from "./flow-canvas";

const Home = () => {
  return (
    <div className="flex">
      <FlowCanvas />
      <SideBar />
    </div>
  );
};

export default Home;

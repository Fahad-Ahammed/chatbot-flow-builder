import Home from "@/app/templates/home"
import Nav from "./components/Nav";

export default function Index() {
  return (
    <main className="flex flex-col h-screen">
      <Nav/>
      <Home/>
    </main>
  );
}

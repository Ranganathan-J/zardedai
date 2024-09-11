import Navbar from "./components/NavBar";
import SearchComp from "./components/SearchComp";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <SearchComp />
      </div>
    </div>
  );
}

export default App;

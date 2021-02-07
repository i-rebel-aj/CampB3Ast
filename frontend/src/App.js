import "./App.css";
import NavBar from "./components/navigation-bar";
import CustomRouter from "./components/custom-router";

function App() {
  return (
    <div>
      <NavBar />
      <CustomRouter />
      {/* Route components are rendered if the path prop matches the current URL */}
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Products from "./components/addToCart/Products";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Table />
      <Products />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

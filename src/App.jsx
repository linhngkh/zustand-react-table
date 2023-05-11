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
      <Table />
      <Products />
    </div>
  );
}

export default App;

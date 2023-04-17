import { useStore } from "../store/useStore";

const FilterInput = () => {
   const filter = useStore((state) => state.filter);
   const setFilter = useStore((state) => state.setFilter);
  return (
    <input
      style={{ width: "100%", padding: "15px" }}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default FilterInput
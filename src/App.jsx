import { create } from "zustand";
import { useEffect } from "react";
const JOURNEY_URL = "https://helsinki-bike-backend.vercel.app/api/journeys";

const useStore = create((set) => ({
  filter: "",
  journey: [],
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setJourney: (journey) =>
    set((state) => ({
      ...state,
      journey,
    })),
}));

const FilterInput = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
};

const JourneyTable = () => {
  const filter = useStore((state) => state.filter);
  const journey = useStore((state) => state.journey);
  return (
    <table width="100%">
      <tbody>
        {journey
          .filter(({ Departure_station_name }) =>
            Departure_station_name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ Departure_station_name, Return_station_name, _id }) => (
            <tr key={_id}>
              <td>{Departure_station_name}</td>
              <td>{Return_station_name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

function App() {
  const filter = useStore((state) => state.filter);
  const setJourney = useStore((state) => state.setJourney);
  useEffect(() => {
    fetch(JOURNEY_URL)
      .then((response) => response.json())
      .then((journey) => setJourney(journey));
  }, []);

  return (
    <div style={{}}>
      <div>
        <FilterInput />
      </div>
      <h1>list of journey</h1>
      <div>
        <JourneyTable />
      </div>
    </div>
  );
}

export default App;

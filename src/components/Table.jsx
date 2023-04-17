import { useStore } from "../store/useStore";
import { useEffect } from "react";
import FilterInput from "./FilterInput";
import JourneyTable from "./JourneyTable";

const JOURNEY_URL = "https://helsinki-bike-backend.vercel.app/api/journeys";

const Table = () => {
  const filter = useStore((state) => state.filter);
  const setJourney = useStore((state) => state.setJourney);
  // fetch journey data
  useEffect(() => {
    fetch(JOURNEY_URL)
      .then((response) => response.json())
      .then((journey) => setJourney(journey));
  }, []);
  return (
    <div>
      <div>
        <FilterInput />
      </div>
      <h1>list of journey</h1>
      <div>
        <JourneyTable />
      </div>
    </div>
  );
};

export default Table;

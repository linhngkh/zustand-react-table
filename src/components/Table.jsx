import { useStore } from "../store/useStore";
import { useEffect } from "react";

import { Styles } from "./StyledTable";
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
      <h1>List of Bike Journey</h1>
      <Styles>
        <JourneyTable />
      </Styles>
    </div>
  );
};

export default Table;

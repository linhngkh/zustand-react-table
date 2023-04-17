import React from "react";
import { useStore } from "../store/useStore";
const JourneyTable = () => {
  const filter = useStore((state) => state.filter);
  const journey = useStore((state) => state.journey);

  return (
    <table width="100%">
      <thead style={{ fontSize: "30px" }}>
        <tr>
          <td>Departure</td>
          <td>Return</td>
        </tr>
      </thead>
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

export default JourneyTable;

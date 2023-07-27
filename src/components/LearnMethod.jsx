import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

const LearnMethod = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  const filterData = () => {
    let filterPhoto = photos.filter((photo) => {
      return photo.title.includes("a");
    });
    console.log(filterPhoto);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
      }}
    >
      <h1>Photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} style={{ width: "100px" }} />
          <p>{photo.title}</p>
          <button onClick={filterData}>see filter</button>
        </div>
      ))}
    </div>
  );
};

export default LearnMethod;

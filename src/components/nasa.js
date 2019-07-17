import React, { useEffect, useState } from "react";
import axios from "axios";
import { directive } from "@babel/types";
import NasaCard from "../components/nasaCard";

export default function Nasa() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CHAnsilU4dWhsQFnm5xTFnhc877f76OTKtPdcIFS&date=2012-03-14`
      )
      .then(res => {
        console.log("RESPONSE", res);
        const datas = res.data;
        setNasaData(datas);
      })
      .catch(res => {});
  }, []);

  return (
    <div className="container">
      <NasaCard
        limit={10}
        title={nasaData.title}
        date={nasaData.date}
        explanation={nasaData.explanation}
        imgUrl={nasaData.url}
      />
    </div>
  );
}

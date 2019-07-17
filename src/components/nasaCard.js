import React from "react";

export default function NasaCard({ title, date, explanation, url }) {
  return (
    <div className="nasa-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{explanation}</p>
      <img src={url} />
    </div>
  );
}

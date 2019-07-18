import React from "react";

export default function NasaCard({ title, date, explanation, url }) {
  return (
    <div className="nasa-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={url} style={{ maxWidth: "500px" }} />
      <p>{explanation}</p>
    </div>
  );
}

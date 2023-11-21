import React from "react";
import "./Footer.scss";

export const Footer = () => {
  const handleClick = () => {
    fetch("https://dummyjson.com/http/200", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ products: ["dwdqw", "qwdqwd"] }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <article>
      <button onClick={handleClick} className="action-button">
        Sfinalizuj transakcje
      </button>
    </article>
  );
};

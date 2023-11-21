import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export const Footer = () => {
  return (
    <article className="footer">
      <div className="container">
        <p style={{ margin: 0 }}>
          Total: <b>213$</b>
        </p>
        <Link className="link" role="button" to="/shopping-cart">
          Przejdź do koszyka
        </Link>
      </div>
    </article>
  );
};

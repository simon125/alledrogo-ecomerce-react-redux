import React from "react";

import "./SelectedProducts.scss";

export const SelectedProducts = () => {
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone 9</td>
            <td>
              <input className="counter" type="number" name="" id="" />
            </td>
            <td>120$</td>
            <td>
              <button className="remove-btn">&times;</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ textAlign: "right" }}>Total:</td>
            <td>
              <b> 120$</b>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

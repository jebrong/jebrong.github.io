import React from "react";
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../context";

const SingleProduct = () => {
  const { state } = useGlobalContext();

  const { strDrinkThumb, strDrink, strAlcoholic, strGlass } = state.product;

  return (
    <div className="single__container">
      {state.isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <NavLink to="/" className="single__btn_home">
            BACK HOME
          </NavLink>
          <img src={strDrinkThumb} alt={strDrink} />
          <h1>{strDrink}</h1>
          <h3>{strAlcoholic}</h3>
          <h4>{strGlass}</h4>
        </>
      )}
    </div>
  );
};

export default SingleProduct;

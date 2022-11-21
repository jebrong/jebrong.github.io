import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Products = () => {
  const { searchItems, state, grabId } = useGlobalContext();
  return (
    <div className="container__product">
      <section className="container__product__search">
        <label>What do you want?</label>
        <input
          placeholder="Search cock..."
          onChange={(e) => {
            searchItems(e.target.value);
          }}
        ></input>
      </section>

      {state.noMatch ? (
        <p>NO RESULTS FOUND!</p>
      ) : (
        <div className="container__product_list">
          {state.list.map(
            ({
              strDrinkThumb,
              idDrink,
              strDrink,
              strAlcoholic,
              strCategory,
            }) => {
              return (
                <div className="product_item" key={idDrink}>
                  <img src={strDrinkThumb} alt="drink" />
                  <h1>{strDrink}</h1>
                  <h4>{strCategory}</h4>
                  <p>{strAlcoholic}</p>
                  <NavLink
                    to={`products/${idDrink}`}
                    className="product__item__btn"
                    onClick={() => {
                      grabId(idDrink);
                    }}
                  >
                    Details
                  </NavLink>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Products;

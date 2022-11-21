import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let initialState = {
  word: "a",
  list: [],
  product: {},
  productId: "",
  isLoading: true,
  noMatch: false,
};
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  let [state, dispense] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispense({ type: "LOADING" });

    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.word}`;

    const res = await fetch(url);
    let data = await res.json();
    let { drinks } = data;

    if (drinks !== null) {
      dispense({ type: "SEARCH_DATA", payload: drinks });
    } else if (drinks === null) {
      dispense({ type: "NO_MATCH" });
    }

    return data;
  };

  const fetchProduct = async () => {
    dispense({ type: "LOADING" });

    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${state.productId}`;
    const res = await fetch(url);
    let data = await res.json();
    let item = data.drinks[0];

    if (item === null) {
      return;
    } else {
      dispense({ type: "GET_PRODUCT", payload: item });
    }
  };

  const grabId = (id) => {
    dispense({ type: "LOADING" });
    dispense({ type: "GRAB_ID", payload: id });
  };

  useEffect(() => {
    fetchData();
  }, [state.word]);

  useEffect(() => {
    if (state.productId) {
      fetchProduct();
    }
  }, [state.productId]);

  const searchItems = (item) => {
    item === ""
      ? (item = "")
      : dispense({ type: "INPUT_SEARCH", payload: item });
  };

  return (
    <AppContext.Provider value={{ searchItems, fetchData, state, grabId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

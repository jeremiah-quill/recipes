import React from "react";

export const ListStateContext = React.createContext();

export function ListProvider({ children }) {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredients(ingredients) {
    setIngredients((prevIngredients) => [...prevIngredients, ...ingredients]);
  }

  const ingredientState = {
    ingredients,
    addIngredients,
  };

  return <ListStateContext.Provider value={{ ingredientState }}>{children}</ListStateContext.Provider>;
}

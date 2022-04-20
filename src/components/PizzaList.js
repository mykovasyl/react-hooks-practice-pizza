import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onPizzaEdit }) {
const pizzasToDisplay = pizzas.map(pizza => {
  return <Pizza key={pizza.id} id={pizza.id} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} onPizzaEdit={onPizzaEdit} />
})

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzasToDisplay
        }
      </tbody>
    </table>
  );
}

export default PizzaList;

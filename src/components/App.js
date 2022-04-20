import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
const [pizzas, setPizzas] = useState([])
const [formData, setFormData] = useState({
  id: '',
  topping: '',
  size: '',
  vegetarian: false
})

useEffect(() => {
  fetch('http://localhost:3001/pizzas')
  .then(resp => resp.json())
  .then(data => setPizzas(data))
}, [])

  return (
    <>
      <Header />
      <PizzaForm pizzaData={formData} updatePizza={setFormData} pizzas={pizzas} updatePizzas={setPizzas} />
      <PizzaList pizzas={pizzas} onPizzaEdit={setFormData}/>
    </>
  );
}

export default App;

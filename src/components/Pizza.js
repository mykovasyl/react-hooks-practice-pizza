import React from "react";

function Pizza({ topping, size, vegetarian, onPizzaEdit, id }) {

  function handleClick() {
    onPizzaEdit({
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;

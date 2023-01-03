import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  // add item function
  const addItem = () => {
    if (!inputData) {
      alert("add item in list");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((crEl) => {
          if (crEl.id === isEditItem) {
            return { ...crEl, name: inputData };
          }
          return crEl;
        })
      );
      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const newInput = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, newInput]);
      setInputData("");
    }
  };

  // Edit item
  const editItem = (index) => {
    const item_edited = items.find((crEl) => {
      return crEl.id === index;
    });
    setInputData(item_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // Delete items
  const delItem = (index) => {
    const updatedItems = items.filter((crEl) => {
      return crEl.id !== index;
    });
    setItems(updatedItems);
  };

  // Remove all items
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img className="Pencil" src="./Images/pencil.png" alt="" />
            <figcaption className="Figcaption">TODOLIST📃</figcaption>
          </figure>
          <div className="Input-div">
            <input
              className="input-form"
              type="text"
              placeholder="✍Add Item.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>
            {toggleButton ? (
              <i
                className="fa-sharped fa-solid fa-pen-to-square"
                onClick={addItem}
              ></i>
            ) : (
              <i className="fa-solid fa-plus" onClick={addItem}></i>
            )}
          </div>
          {/* Show items.... */}

          {items.map((crEl) => {
            return (
              <div className="each-item" key={crEl.id}>
                <h5>{crEl.name}</h5>
                <i
                  className="fa-sharp fa-solid fa-pen-to-square"
                  onClick={() => editItem(crEl.id)}
                ></i>
                <i
                  className="fa-regular fa-trash-can"
                  onClick={() => delItem(crEl.id)}
                ></i>
              </div>
            );
          })}

          <div className="clear">
            <button className="remove-item" onClick={removeAll}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

import { useState } from "react";
import { Header } from "../header/Header";
import Cards from "../Cards/Cards";

import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [inputs, setInputs] = useState([]);
 
  function handleSubmit(event) {
    event.preventDefault();

    const newInput = {
      name: name,
      date: date,
      amount: amount,
      time: new Date(),
    };
    setInputs((prevState) => [...prevState, newInput]);

    setName("");
    setDate("");
    setAmount("");
  }

  function handleDelete(name) {
    setInputs((prevState) => prevState.filter((input) => input.name !== name));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Expanse Traker</h1>
        <p>Add a Expanse</p>
        
        <div className="divName">
          <label htmlFor="form" id="labelName">
            Name:
          </label>
          <input
            type="text"
            id="nameInput"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="divDate-Amount">
          <label htmlFor="form" id="labelDate">
            Date:
          </label>
          <input
            type="text"
            id="nameDate"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />

          <label htmlFor="form" id="labelAmount">
            Amount:
          </label>
          <input
            type="text"
            id="nameNumber"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <button className="submitBut" type="submit">
          Add Expanse
        </button>
      </form>
      <div className="output">
        <Header />
        {inputs.map((input) => (
          <>
            <Cards
              key={input.time}
              name={input.name}
              date={input.date}
              amount={input.amount}
            />

            <button
              className="deleteBut"
              onClick={() => handleDelete(input.name)}
            >
              Delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;

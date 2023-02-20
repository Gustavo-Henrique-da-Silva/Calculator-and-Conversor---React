import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumberChange = (event) => {
    event.target.name == 'firstNumber'
      ? setFirstNumber(parseInt(event.target.value) || 0)
      : setSecondNumber(parseInt(event.target.value) || 0);
  };

  const calculate = (operation) => {
    return function () {
      switch (operation) {
        case 1:
          setResult(firstNumber + secondNumber);
          break;
        case 2:
          setResult(firstNumber - secondNumber);
          break;
        case 3:
          setResult(firstNumber * secondNumber);
          break;
        case 4:
          setResult(firstNumber / secondNumber);
          break;
        case 5:
          setResult(firstNumber ** secondNumber);
          break;
        case 6:
          setResult(firstNumber % secondNumber);
          break;
      }
    };
  };
  return (
    <>
      <h1>Basic Calculator</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="firstNumber"
          value={firstNumber}
          onChange={handleNumberChange}
        />
      </div>

      <br />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="secondNumber"
          value={secondNumber}
          onChange={handleNumberChange}
        />
      </div>
      <br />

      <div className="container">
        <button className="btn btn-primary" onClick={calculate(1)}>
          +
        </button>
        <button className="btn btn-primary" onClick={calculate(2)}>
          -
        </button>
        <button className="btn btn-primary" onClick={calculate(3)}>
          *
        </button>
        <button className="btn btn-primary" onClick={calculate(4)}>
          /
        </button>
        <button className="btn btn-primary" onClick={calculate(5)}>
          ^
        </button>
        <button className="btn btn-primary" onClick={calculate(6)}>
          %
        </button>

        <p>The result is: {result}</p>
      </div>
    </>
  );
};

export default Calculator;

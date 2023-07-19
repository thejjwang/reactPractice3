import React, { useState } from 'react';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operation, setOperation] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);

  const handleNumberClick = (num) => {
    if (currentNumber === '0') {
      setCurrentNumber(num.toString());
    } else {
      setCurrentNumber((prevNumber) => prevNumber + num.toString());
    }
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber('0');
  };

  const handleClearClick = () => {
    setCurrentNumber('0');
    setOperation(null);
    setPreviousNumber(null);
  };

  const handleEqualClick = () => {
    if (previousNumber && operation && currentNumber) {
      let result;
      const num1 = parseFloat(previousNumber);
      const num2 = parseFloat(currentNumber);

      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }

      setCurrentNumber(result.toString());
      setOperation(null);
      setPreviousNumber(null);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" value={currentNumber} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;

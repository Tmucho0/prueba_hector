import { useState } from 'react';
import './App.css';

function App() {  
  const [inputValue, setInputValue] = useState('');
  const [lastInputOperator, setLastInputOperator] = useState(false);

  const click = (value) => {

    if (lastInputOperator && !isNaN(value)) {
      setInputValue(inputValue + value);
    } else if (!isNaN(value)) { 
      setInputValue(inputValue + value);
      setLastInputOperator(false); 
    } else { 
      setInputValue(inputValue + value); 
      setLastInputOperator(true); 
    }
  };

  return (
    <>
      <div className='inputContainer'>
        <input type="text" placeholder='input here' value={inputValue} readOnly />
      </div>
      <div className='calculatorContainer'>
        <button onClick={() => click(1)}> 1 </button>
        <button onClick={() => click(2)}> 2 </button>
        <button onClick={() => click(3)}> 3 </button>
        <button onClick={() => click(4)}> 4 </button>
        <button onClick={() => click(5)}> 5 </button>
        <button onClick={() => click(6)}> 6 </button>
        <button onClick={() => click(7)}> 7 </button>
        <button onClick={() => click(8)}> 8 </button>
        <button onClick={() => click(9)}> 9 </button>
      </div>
      <div className='operatorsContainer'>
        <button onClick={() => click('+')}> + </button>
        <button onClick={() => click('-')}> - </button>
        <button onClick={() => click('*')}> * </button>
        <button onClick={() => click('/')}> / </button>
        <button onClick={() => setInputValue(eval(inputValue))}> = </button>
        <button onClick={() => setInputValue('')}> Clear </button>
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from '../features/counter/counterSlice';

function Counter() {

    const [incrementAmount, setIncrementAmount] = useState('2');
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()


  return (
    <div>
       <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span className='' style={{padding: '10px 20px',margin: '20px', border: '1px solid blue'}}>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>


      <div className='f' style={{padding:" 20px 0"}}>
        <input
          className='dd'
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className='d'
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className='rr'
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
    </div>
    </div>
  );
}

export default Counter;

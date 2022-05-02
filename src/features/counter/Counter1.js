import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div style={{margin:'200px',textAlign: 'center', backgroundColor:'yellowgreen'}} className="App">
                <button className='button' aria-label='Increment value' onClick={() => { setCount(count + 1) }} >+</button>
                <span className="value"> Count :{count}</span>   

                <button className='button' aria-label='Decrement value' onClick={() => { setCount(count - 1) }} >-</button>
            </div>

        </div>
    )
}

export default Counter
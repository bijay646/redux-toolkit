import {useSelector, useDispatch} from 'react-redux';
import{increment, decrement, incrementByAmount} from'./counterSlice';
import Coin from '../coin/Coin';


function Counter() {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{margin:'200px',textAlign: 'center', backgroundColor:'yellowgreen'}} className="App">
                <button className='button' aria-label='Increment value' onClick={() => {dispatch(increment())}} >+</button>
                <Coin />   

                <button className='button' aria-label='Decrement value' onClick={() => {dispatch(decrement())}} >-</button>

                <button className='button' onClick={() =>{dispatch(incrementByAmount(5))}} >Increment by 5</button>
            </div>

        </div>
    )
}

export default Counter
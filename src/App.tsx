import React from 'react'
import { useDispatch } from 'react-redux';
import Counter from './components/Counter';
import { ADD_COUNT, DEL_COUNT} from './rootStore';
import './App.css';

const App = () => {
  // const state = useSelector<rootState, rootState['count']>(state => state.count);
  // console.log("state - ", state);
  const dispatch = useDispatch();

  const addFunc =()=> {
    dispatch({type:ADD_COUNT, payload:10});
  }
  const delFunc =()=> {
    dispatch({type:DEL_COUNT, payload:5});
  }

  return (
    <div className='App'>
      <header className="App-header">
      <Counter/>
      {/* <div>
        Count: {state.count}
      </div> */}
      <div>
        <button onClick={addFunc}>Add</button>
      </div>
      <div>
        <button onClick={delFunc}>Del</button>
      </div>
      </header>
    </div>
  )
}

export default App
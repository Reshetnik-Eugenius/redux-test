import React from 'react'
import { useSelector } from 'react-redux';
import { rootState } from '../rootStore';

const Counter  = () => {
    const state = useSelector<rootState, rootState['count']>(state => state.count);

  return (
    <div>
        Count: {state.count}
    </div>
  )
}

export default Counter
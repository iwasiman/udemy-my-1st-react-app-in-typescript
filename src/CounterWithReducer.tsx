import React, {useReducer} from 'react';

type StateType = { count: number; };
type ActionType = { type: 'incre' | 'decre' | 'reset'};
const initialState: StateType = {count: 0};

function reducerFunc(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'incre':
      return {count: state.count + 1};
    case 'decre':
      return {count: state.count - 1};
    case 'reset': // case文を打った時点でresetが候補に出てくる。これが強み。
      return initialState;
    default:
      throw new Error();
   }
}


function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const divStyle = {
    backgroundColor: '#ccccff',
  };

  // 下でstate.と打つとcountが候補で出てくる。これが強み。
  return (
    <div style={divStyle}>
      <h4>React Hooks useReducerを使った数保持器こむぽねんと</h4>
      回数 {state.count}
      <button onClick={() => dispatch({type: 'incre'})}>1を足しまする</button>
      <button onClick={() => dispatch({type: 'decre'})}>1を引きまする</button>
      <button onClick={() => dispatch({type: 'reset'})}>仕切り直して候</button>
    </div>
  )
}

export default CounterWithReducer;
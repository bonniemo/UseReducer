import { useReducer } from "react";

const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
};

const AgeReducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTION.PLUS:
            return { age: state.age +1 }
        case ACTION.MINUS:
            return { age: state.age -1 }
    }
}

const AgeCounter = () => {
    const [state, dispatch] = useReducer(AgeReducer, { age: 18 });
  return (
    <>
    <h1>Age Counter</h1>
    <h2>Age: {state?.age}</h2>
    <button onClick={()=> dispatch ({ type: ACTION.PLUS })}>+1</button>
    <button onClick={() => dispatch ({ type: ACTION.MINUS })}>-1</button>
    </>
  )
}

export default AgeCounter;
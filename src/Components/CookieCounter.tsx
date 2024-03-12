import { useReducer, useState } from "react"

const ACTION = {
  BAKE: 'bake',
  EAT: 'eat',
  BINGE: 'binge',
  EATALL: 'eatAll',
  EATHALF: 'eatHalf',
  EATINPUT: 'eatInput'
}

type State = { cookies: number }
type Action = { type: string, payload?: number }

const CookieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.EAT:
      return { cookies: state.cookies -1 }
    case ACTION.BAKE:
      return { cookies: state.cookies +50 }
    case ACTION.BINGE:
      return { cookies: state.cookies -10 }
    case ACTION.EATALL:
      return { cookies: state.cookies = 0 }
      case ACTION.EATHALF:
        const halfCookies = state.cookies / 2
        return {           
          cookies: Math.ceil(halfCookies)
        }
    case ACTION.EATINPUT:
      return { cookies: state.cookies - (action.payload ?? 0) }
    default:
      return state; // raise error
  }
}

const CookieCounter = () => {
  const [state, dispatch] = useReducer (CookieReducer, { cookies: 0 })
  const [inputNumber, setInputNumber] = useState('');

  const handleEatInput = () => {
    dispatch({ type: ACTION.EATINPUT, payload: parseInt(inputNumber) });
    setInputNumber('');
  }

  return (
    <>
    <h1>Cookie Counter</h1>
    <form action="">
      <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)} />
      <button type="button" onClick={handleEatInput}>Eat this amount</button>
    </form>
    <button onClick={() => dispatch ({ type: ACTION.EAT }) }>Eat a Cookie!</button>
    <button onClick={() => dispatch ({type: ACTION.BAKE})}>Bake a Cookie</button>
    <button onClick={() => dispatch ({type: ACTION.BINGE})}>BINGE</button>
    <button onClick={() => dispatch ({type: ACTION.EATALL})}>Eat them All</button>
    <button onClick={() => dispatch ({type: ACTION.EATHALF})}>Eat half</button>

    <p>You have {state?.cookies} cookies left</p>
    </>
  )
}

export default CookieCounter
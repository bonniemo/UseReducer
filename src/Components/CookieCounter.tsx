import { useReducer } from "react"

const ACTION = {
  BAKE: 'bake',
  EAT: 'eat',
  BINGE: 'binge'
}
const CookieReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.EAT:
      return { cookies: state.cookies -1 }
    case ACTION.BAKE:
      return { cookies: state.cookies +1 }
    case ACTION.BINGE:
      return { cookies: state.cookies -10 }
  }
}

const CookieCounter = () => {
  const [state, dispatch] = useReducer (CookieReducer, { cookies: 10 })
  return (
    <>
    <h1>Cookie Counter</h1>
    <button onClick={() => dispatch ({ type: ACTION.EAT }) }>Eat a Cookie!</button>
    <button onClick={() => dispatch ({type: ACTION.BAKE})}>Bake a Cookie</button>
    <button onClick={() => dispatch ({type: ACTION.BINGE})}>BINGE</button>

    <p>You have {state?.cookies} cookies left</p>
    </>
  )
}

export default CookieCounter
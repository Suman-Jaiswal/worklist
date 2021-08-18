import React, { createContext, useReducer, useEffect } from 'react'
import { planReducer } from '../reducers/planReducer';

export const PlanContext = createContext()

function PlanContextProvider(props) {
  const [plans, dispatch] = useReducer(planReducer, [], () => {
    const localData = localStorage.getItem('plans')
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans))
  }, [plans])

  return (
    <PlanContext.Provider value={{ plans, dispatch }}>
      {props.children}
    </PlanContext.Provider>
  )
}
export default PlanContextProvider
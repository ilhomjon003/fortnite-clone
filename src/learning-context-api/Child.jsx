import React from 'react';
import { useStateValue } from "../context/reducer"

function Child() {
  const [state, action] = useStateValue();
  const users = [
    { name: "John" },
    { name: "Mike" },
    { name: "Doe" },
    { name: "Leo" }
  ]
  console.log(state.users);
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => action({ type: "INC" })}>increment 1</button>
      <button onClick={() => action({ type: "INC", payload: 5 })}>increment 5</button>
      <button onClick={() => action({ type: "INC", payload: 10 })}>increment 10</button>
      <button onClick={() => action({ type: "DEC" })}>increment</button>
      <button onClick={() => action({ type: "CHANGE_THEME" })}>Change Theme</button>
    {
      users.map((user, index) => 
        <button key={index} onClick={() => action( {type: "ADD_USER", payload: user})}>{user.name}</button>
      )
    }

    <button onClick={() => action({type: "REMOVE_USER"})}>Remove last user</button>
    
    </div>
  )
}

export default Child
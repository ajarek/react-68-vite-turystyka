import React from 'react'

const Nav = ({ add,reset,save }) => {
  return (
    <div className='nav'>
      <button onClick={add}>Polub</button>
      <button onClick={reset}>Usuń</button>
      <button onClick={save}>Zapisz</button>
    </div>
  )
}

export default Nav

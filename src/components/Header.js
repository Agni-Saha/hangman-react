import React from 'react'

// rafce
const Header = ({hintText}) => {
  return (
    <>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <h2>{hintText}</h2>
    </>
  )
}

export default Header

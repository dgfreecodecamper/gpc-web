import React from "react"

const Letter = (props) => {
  const letterStyle = {
    fontSize: "32px",
    color: "red",
    padding: "15px"
  }
  return(
    <div style={letterStyle}>
    {props.children}
    </div>
  )
}

export default () =>
  <div>
    <h2>This is my testpage</h2>
    <p>This is a paragraph here so that i can see whats happening on the page.</p>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>

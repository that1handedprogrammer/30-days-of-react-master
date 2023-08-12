import React from 'react';
import ReactDOM from 'react-dom'

//const jsxElement = <h1>This is a JSX element</h1>


const header = (
  <header>
<h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <p>Ethan Edeko</p>
    <small>Oct 2, 2020</small>
  </header>
)

const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
)


const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)

import React from 'react'
import { render } from 'react-dom'

import LandingPage from './components/LandingPage/index'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <LandingPage/>
    </>
  )
}

render(<App />, mainElement)

import React from 'react'
import logo from './logo.svg'
import { Button } from '@yourapp/ui'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onPress={() => alert('Test')}>Primary</Button>
        <Button variant="SECONDARY" onPress={() => alert('Test')}>
          Secondary
        </Button>
        <Button disabled onPress={() => alert('Test')}>
          Disabled
        </Button>
      </header>
    </div>
  )
}

export default App

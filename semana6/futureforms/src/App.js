import React from 'react'
import Forms from './components/forms'
import SecondForm from './components/secondForm'
import ThirdForm from './components/thirdForm'
import LastPage from './components/lastpage'
import "../src/App.css"


function App() {
  return (
    <div className='App'>
      <Forms />
      <SecondForm />
      <ThirdForm />
      <LastPage />

    </div>
  )
}

export default App

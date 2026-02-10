import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/Accordion'
import WhatILearned from './components/WhatILearned'

function App() {


  return (
    <div className='bg-slate-950 min-h-screen pb-10'>
      <Accordion />
      <WhatILearned />
    </div>
  )
}

export default App

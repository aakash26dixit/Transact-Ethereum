import { useState } from 'react'
// import './App.css'
// import {Navbar , Welcome, Transactions, Services , Footer} from './components';
import {Navbar} from './components/Navbar'
import {Welcome} from './components/Welcome'
import {Loader} from './components/Loader'
import {Services} from './components/Services'
import {Transactions} from './components/Transactions'
import {Footer} from './components/Footer'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App;

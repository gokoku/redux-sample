import './App.css'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'

function App() {
  return (
    <div>
      <header className='header'>Shop Site </header>
      <div className='container'>
        <Shop />
        <Cart />
      </div>
    </div>
  )
}

export default App

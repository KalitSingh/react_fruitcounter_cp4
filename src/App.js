import FruitsCounter from './components/FruitsCounter'

import './App.css'

const fruitsCounterDetails = {
  bananImg: 'https://assets.ccbp.in/frontend/react-js/banana-img.png',
  mangoImg: 'https://assets.ccbp.in/frontend/react-js/mango-img.png',
  bananaBtn: 'Eat Banana',
  mangoBtn: 'Eat Mango',
}

const App = () => <FruitsCounter details={fruitsCounterDetails} />

export default App

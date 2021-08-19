import { Button } from '@material-ui/core'
import { useEffect, useState } from 'react'
import './App.css'
import { CardsCoins } from './Components/CardsCoin'
import { CardsDrink } from './Components/CardsDrink'

function App() {
  const [coin, setCoin] = useState(0)
  const [drink, setDrink] = useState([
    { name: 'Кола', price: 10, quantity: 20 },
    { name: 'Кофе', price: 5, quantity: 40 },
  ])
  const [total, setTotal] = useState([{ price: 0 }])
  const [totalPrice, setTotalPrice] = useState('')
  const [sell, setSell] = useState(false)
  const [sellActive, setSellActive] = useState(false)

  useEffect(() => {
    setTotal(drink.map(e => ({ name: e.name, price: 0, quantity: 0 })))
  }, [])

  useEffect(() => {
    if (total) {
      setTotalPrice(total.map(e => e.price).reduce((a, b) => a + b))
    }
  }, [total])

  useEffect(() => {
    if (totalPrice <= coin && totalPrice !== 0) setSellActive(true)
    else setSellActive(false)
    console.log(sellActive)
  }, [totalPrice, coin])

  const Sell = () => {
    total.map(d => (d.price = 0))
    setCoin(coin - totalPrice)
    setTotalPrice(0)
    setSell(!sell)
    setSellActive(false)
  }

  return (
    <div className='App'>
      <div className='Container'>
        <h1>Вставьте монету</h1>
        <CardsCoins setCoin={setCoin} />
        <h3>Ваш счёт: {coin} Монет</h3>
        <h1>Выберите напиток</h1>
        <CardsDrink
          setDrink={setDrink}
          drink={drink}
          setTotal={setTotal}
          total={total}
          sell={sell}
        />
        <Button disabled={!sellActive} variant='contained' onClick={Sell}>
          Купить
        </Button>
        <h2>Итого: {totalPrice} Монет</h2>
        <Button onClick={() => setCoin(0)}>Получить сдачу</Button>
      </div>
    </div>
  )
}

export default App

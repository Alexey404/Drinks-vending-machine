import { useEffect, useState } from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { IconButton, Input } from '@material-ui/core'

export const CardsDrink = ({ drink, setTotal, total, sell, setDrink }) => {
  return (
    <div className='Cards'>
      {drink.map((e, i) => (
        <Card
          drink={drink}
          key={i}
          e={e}
          setTotal={setTotal}
          total={total}
          sell={sell}
          setDrink={setDrink}
        />
      ))}
    </div>
  )
}

const Card = ({ e, setTotal, total, sell, setDrink, drink }) => {
  const [active, setActive] = useState(false)
  const [сounter, setCounter] = useState(0)
  const name = e.name

  useEffect(() => {
    setActive(false)
    setCount(0)
  }, [sell])

  const onClick = () => {
    if (e.quantity) {
      setActive(!active)
      active ? setCount(0) : setCount(1)
    }
  }

  const setCount = (c) => {
    setCounter(c)
    totalCoin(c)
  }

  const inputCounter = (value) => {
    if (e.quantity >= value) setCount(+/\d+/.exec(value))
    if (e.quantity < value) setCount(e.quantity)
    if (!value || value <= 0) setCount(1)
    if (value === 0) setActive(false)
  }

  const Card = !active ? 'Card' : 'Card active'

  const totalCoin = (p) => {
    const price = p * e.price

    const quantity = e.quantity - p

    setTotal(
      total.map((d) => (d.name === e.name ? { name, price, quantity } : d))
    )
  }

  return (
    <>
      <div onClick={onClick} className={Card}>
        <div>{e.name}</div>
        <div>Цена: {e.price} Монет</div>
        <div>Осталось: {e.quantity}</div>
        {active ? (
          <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex' }}>
            <IconButton
              onClick={() => {
                if (сounter > 1) setCount(сounter - 1)
              }}>
              <ArrowLeftIcon />
            </IconButton>
            <Input
              fullWidth={true}
              onChange={(e) => inputCounter(e.currentTarget.value)}
              value={сounter}
            />
            <IconButton
              onClick={() => {
                if (сounter < e.quantity) setCount(сounter + 1)
              }}>
              <ArrowRightIcon />
            </IconButton>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

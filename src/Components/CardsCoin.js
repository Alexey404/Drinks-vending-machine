import { Button } from '@material-ui/core'
import './CardsCoin.css'

export const CardsCoins = ({ setCoin }) => {
  const coin = [1, 2, 5, 10]

  return (
    <div className='Cards'>
      {coin.map((e, i) => (
        <div className='buttonCoin'>
          <Button
            
            key={i}
            variant='contained'
            onClick={() => setCoin((actual) => actual + e)}>
            {e}
          </Button>
        </div>
      ))}
    </div>
  )
}

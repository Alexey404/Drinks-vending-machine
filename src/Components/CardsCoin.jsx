import { Button } from "@material-ui/core";
import "./CardsCoin.css";

export const CardsCoins = ({ setCoin }) => {
  const coin = [1, 2, 5, 10, 20, 50, 100, 200];

  return (
    <div className="coins">
      {coin.map((e, i) => (
        <div className="buttonCoin" key={i}>
          <Button
            variant="contained"
            onClick={() => setCoin((actual) => actual + e)}
          >
            {e}
          </Button>
        </div>
      ))}
    </div>
  );
};

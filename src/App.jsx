import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import { CardsCoins } from "./Components/CardsCoin";
import { CardsDrink } from "./Components/CardsDrink";

const DRINKS = [
  { name: "Маргарита", price: 10, quantity: 20, icon: "/rb_3888.png" },
  { name: "Космополитен", price: 5, quantity: 40, icon: "/rb_164550.png" },
  { name: "Мартини Драй", price: 40, quantity: 40, icon: "/rb_2149228482.png" },
  { name: "Маргарита", price: 10, quantity: 20, icon: "/rb_3888.png" },
  { name: "Космополитен", price: 5, quantity: 40, icon: "/rb_164550.png" },
  { name: "Мартини Драй", price: 40, quantity: 40, icon: "/rb_2149228482.png" },
  { name: "Маргарита", price: 10, quantity: 20, icon: "/rb_3888.png" },
  { name: "Космополитен", price: 5, quantity: 40, icon: "/rb_164550.png" },
  { name: "Мартини Драй", price: 40, quantity: 40, icon: "/rb_2149228482.png" },
  { name: "Апероль Шприц", price: 60, quantity: 40, icon: "/rb_112935.png" }
];

const App = () => {
  const [coin, setCoin] = useState(0);

  const totalDefault = DRINKS.map((e) => ({
    name: e.name,
    price: 0,
    quantity: 0
  }));

  const [total, setTotal] = useState(totalDefault);
  const [totalPrice, setTotalPrice] = useState("");
  const [sell, setSell] = useState(false);
  const [sellActive, setSellActive] = useState(false);

  useEffect(() => {
    if (total) {
      setTotalPrice(total.map((e) => e.price).reduce((a, b) => a + b, 0));
    }
  }, [total]);

  useEffect(() => {
    if (totalPrice <= coin && totalPrice !== 0) setSellActive(true);
    else setSellActive(false);
  }, [totalPrice, coin]);

  const Sell = () => {
    total.map((d) => (d.price = 0));
    setCoin(coin - totalPrice);
    setTotalPrice(0);
    setSell(!sell);
    setSellActive(false);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app-header">
          <h1 className="title">Торговый автомат</h1>
          <div className="coins-title">
            <div>
              <h3>Вставьте монету</h3>
              <div className="scroll-wrapper">
                <CardsCoins setCoin={setCoin} />
              </div>
            </div>
            <div>
              <h2>Ваш счёт: {coin} Монет</h2>
              <Button onClick={() => setCoin(0)}>Получить сдачу</Button>
            </div>
          </div>
        </div>
        <div className="app-content">
          <h3>Выберите напиток</h3>
          <CardsDrink
            drinks={DRINKS}
            setTotal={setTotal}
            total={total}
            sell={sell}
          />
        </div>
        <div className="app-bottom">
          <Button disabled={!sellActive} variant="contained" onClick={Sell}>
            Купить
          </Button>
          <h2>Итого: {totalPrice} Монет</h2>
        </div>
      </div>
    </div>
  );
};

export default App;

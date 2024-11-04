import { IconButton } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useEffect, useState } from "react";
import { GeneralTextStyles } from "../theme/typography";

export const CardsDrink = ({ drinks, setTotal, total, sell }) => {
  return (
    <div className="cards">
      {drinks.map((e, i) => (
        <Card key={i} e={e} setTotal={setTotal} total={total} sell={sell} />
      ))}
    </div>
  );
};

const Card = ({ e, setTotal, total, sell }) => {
  const [active, setActive] = useState(false);
  const [сounter, setCounter] = useState(0);
  const name = e.name;

  useEffect(() => {
    setActive(false);
    setCount(0);
  }, [sell]);

  const onClick = () => {
    if (e.quantity) {
      setActive(!active);
      active ? setCount(0) : setCount(1);
    }
  };

  const setCount = (c) => {
    setCounter(c);
    totalCoin(c);
  };

  const inputCounter = (value) => {
    if (e.quantity >= value) setCount(+/\d+/.exec(value));
    if (e.quantity < value) setCount(e.quantity);
    if (!value || value <= 0) setCount(1);
    if (value === 0) setActive(false);
  };

  const card = !active ? "card" : "card active";

  const totalCoin = (p) => {
    const price = p * e.price;

    const quantity = e.quantity - p;

    setTotal(
      total.map((d) => (d.name === e.name ? { name, price, quantity } : d))
    );
  };

  return (
    <>
      <div onClick={onClick} className={card}>
        <img src={e.icon} className="counter-icon" />

        <div className={GeneralTextStyles.h3 + " card--title"}>{e.name}</div>
        <div className="card--bottom">
          <div className={GeneralTextStyles.bodyL}>
            Цена:{" "}
            <span className={GeneralTextStyles.buttonText}>{e.price}</span>{" "}
            Монет
          </div>
          <div className={GeneralTextStyles.bodyL}>
            Осталось:{" "}
            <span className={GeneralTextStyles.buttonText}>{e.quantity}</span>{" "}
            шт
          </div>

          <div className="counter-wrapper">
            {active && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{ display: "flex" }}
              >
                <IconButton
                  onClick={() => {
                    if (сounter > 1) setCount(сounter - 1);
                  }}
                >
                  <ArrowLeftIcon />
                </IconButton>
                <input
                  className={"counter-input " + GeneralTextStyles.buttonText}
                  onChange={(e) => inputCounter(e.currentTarget.value)}
                  value={сounter}
                />
                <IconButton
                  onClick={() => {
                    if (сounter < e.quantity) setCount(сounter + 1);
                  }}
                >
                  <ArrowRightIcon />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { decode } from "html-entities";
import { selectedItem } from "../redux/actions";
import { currencyFormat, numberFormat, getItemCondition } from "../utils";

const Item = (props) => {
  const { history, item, selectedItem } = props;

  const getDetail = () => {
    selectedItem(item);
    history.push("/detail");
  };

  return (
    <li className="Item" onClick={getDetail}>
      <img
        className="Item__thumbnail"
        src={item?.thumbnail}
        alt={decode(item?.title)}
      />
      <div className="Item__information">
        <h1 className="Item__information__title" title={decode(item?.title)}>
          {decode(item?.title)}
        </h1>
        <span className="Item__information__price">
          <span className="Item__information__price__text">
            {currencyFormat(item?.price)}
          </span>
          {item?.shipping?.free_shipping && (
            <div
              className="Item__information__price__shipping"
              title="Entrega a domicilio ¡Gratis!"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/van.png"}
                alt="shipping"
              />
            </div>
          )}
        </span>

        {item?.installments?.quantity && item?.installments?.amount && (
          <span className="Item__information__installments">
            en {item?.installments?.quantity}x&nbsp;
            {currencyFormat(item?.installments?.amount)}
          </span>
        )}
      </div>
      <span className="Item__joker"></span>
      <div className="Item__seller">
        <div className="Item__seller__available">
          <span className="Item__seller__available__label">
            Stock disponible
          </span>
          <span
            className="Item__seller__available__number"
            title={numberFormat(item?.available_quantity)}
          >
            {numberFormat(item?.available_quantity)}
          </span>
        </div>
        <span className="Item__seller__condition">
          {getItemCondition(item)}
        </span>
        <a
          className="Item__seller__eshop"
          target="_blank"
          rel="noreferrer"
          href={item?.seller?.permalink}
        >
          Ver vendedor
        </a>
      </div>
    </li>
  );
};

export default connect(null, { selectedItem })(withRouter(Item));

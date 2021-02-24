import React, { useEffect, useState } from "react";

import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swiper from "swiper";
import { decode } from "html-entities";
import {
  showPreloader,
  emptyBreadcrumbs,
  addBreadcrumb,
} from "../redux/actions";
import Services from "../services";
import { getItemCondition, currencyFormat } from "../utils";
import Breadcrumbs from "./Breadcrumbs";

const Detail = (props) => {
  const [itemDetail, setItemDetail] = useState(null);
  const {
    history,
    selectedItem,
    showPreloader,
    emptyBreadcrumbs,
    addBreadcrumb,
  } = props;

  useEffect(() => {
    getItemDetail();
    document.querySelector(".Content").scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const getItemDetail = () => {
    if (!selectedItem) {
      history.push("/");
    } else {
      showPreloader(true);
      Services.getProductById(selectedItem.id).then(
        (res) => {
          showPreloader(false);
          if (res.status === 200) {
            const item = res.data.item;
            setItemDetail(item);
            emptyBreadcrumbs();
            addBreadcrumb({ name: item.category_id, amount: 1 });
            addBreadcrumb({ name: item.id, amount: 1 });
            renderSwiper();
          } else {
            alert(
              "Ocurrió un error al realizar la consulta, por favor intente más tarde"
            );
          }
        },
        () => {
          // Error
          showPreloader(false);
          history.push("/list");
        }
      );
    }
  };

  const renderSwiper = () => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  return (
    <div className="Detail">
      <Breadcrumbs></Breadcrumbs>
      <div className="Detail__wrapper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {itemDetail &&
              itemDetail.pictures.map((picture) => (
                <div className="swiper-slide" key={picture.id}>
                  <figure>
                    <img src={picture.url} alt={picture.id} />
                  </figure>
                </div>
              ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <article className="Detail__item">
          <NavLink
            className="Detail__item__close"
            title="Cerrar detalle"
            to="/list"
          >
            <img src={process.env.PUBLIC_URL + "/img/cross.png"} alt="close" />
          </NavLink>
          <div className="Detail__item__wrapper">
            <div className="Detail__item__condition">
              <span className="Detail__item__condition__status">
                {getItemCondition(itemDetail)}
              </span>
              <span className="Detail__item__condition__sold-quantity">
                {itemDetail?.sold_quantity || 0} vendidos
              </span>
            </div>
            <h1
              className="Detail__item__title"
              title={decode(itemDetail?.title)}
            >
              {decode(itemDetail?.title)}
            </h1>
            <span className="Detail__item__price">
              {currencyFormat(itemDetail?.price)}
            </span>
            <div className="Detail__item__stock">
              <span>Stock disponible</span>
              <span>{itemDetail?.available_quantity || 0} disponibles</span>
            </div>
            <div className="Detail__item__actions">
              <button>Comprar ahora</button>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </article>
        <fieldset className="Detail__description">
          <legend>Descripción del producto:</legend>
          {decode(itemDetail?.description)}
        </fieldset>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { selectedItem } = state.items;
  return { selectedItem };
};

export default connect(mapStateToProps, {
  showPreloader,
  emptyBreadcrumbs,
  addBreadcrumb,
})(withRouter(Detail));

import React, { useEffect } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { emptyBreadcrumbs, addBreadcrumb } from "../redux/actions";
import Item from "./Item";
import InformationPage from "./InformationPage";
import Breadcrumbs from "./Breadcrumbs";

const ItemList = (props) => {
  const { history, allItems, lookFor, emptyBreadcrumbs, addBreadcrumb } = props;

  useEffect(() => {
    if (!lookFor && !allItems?.items?.length) {
      history.push("/");
    }
    if (allItems?.categories?.length) {
      const category = getTopCategory();
      emptyBreadcrumbs();
      addBreadcrumb(category);
    }
    // eslint-disable-next-line
  }, [allItems]);

  const getTopCategory = () => {
    if (allItems?.categories instanceof Array) {
      const count = {};
      allItems?.categories.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
      });
      const objCategories = Object.keys(count).map(function (key) {
        return { name: key, amount: count[key] };
      });
      const maxAmount = Math.max.apply(
        Math,
        objCategories.map((category) => {
          return category.amount;
        })
      );
      return objCategories.find((category) => category.amount === maxAmount);
    }
  };

  return (
    <div className="ItemList">
      <Breadcrumbs></Breadcrumbs>
      <ul className="ItemList__list">
        {allItems?.items?.length ? (
          allItems.items.map((item, idx) => {
            return <Item key={idx} item={item} />;
          })
        ) : (
          <InformationPage message="No hay resultados, intenta nuevamente" />
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { lookFor } = state.search;
  const { allItems } = state.items;

  return { lookFor, allItems };
};

export default connect(mapStateToProps, { emptyBreadcrumbs, addBreadcrumb })(
  withRouter(ItemList)
);

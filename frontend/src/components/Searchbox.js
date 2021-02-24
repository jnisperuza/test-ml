import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  lookFor,
  setResults,
  showPreloader,
  emptyBreadcrumbs,
} from "../redux/actions";
import Services from "../services";

const Searchbox = (props) => {
  const [input, setInput] = useState("");
  const {
    history,
    lookFor,
    showPreloader,
    setResults,
    emptyBreadcrumbs,
  } = props;

  const updateInput = (input) => {
    setInput(input);
    if (!input) {
      emptyBreadcrumbs();
      setResults([]);
      history.push("/");
    }
  };

  const handleLookFor = (event) => {
    if (event.type === "click" || event.key === "Enter") {
      emptyBreadcrumbs();
      lookFor(input);
      if (input) {
        getProductsByQuery();
      }
    }
  };

  const getProductsByQuery = () => {
    showPreloader(true);
    Services.getProductsByQuery(input).then(
      (res) => {
        showPreloader(false);
        if (res.status === 200) {
          if (res?.data) {
            setResults(res.data);
            history.push("/list");
          } else {
            setResults([]);
          }
        } else {
          alert(
            "Ocurrió un error al realizar la consulta, por favor intente más tarde"
          );
        }
      },
      () => {
        // Error
        showPreloader(false);
      }
    );
  };

  return (
    <div className="Searchbox">
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
        className="Searchbox__box"
        onChange={(e) => updateInput(e.target.value)}
        onKeyPress={handleLookFor}
        value={input}
      />
      <button className="Searchbox__search" onClick={handleLookFor}>
        <img src={process.env.PUBLIC_URL + "/img/search.png"} alt="search" />
      </button>
    </div>
  );
};

export default connect(null, {
  lookFor,
  setResults,
  showPreloader,
  emptyBreadcrumbs,
})(withRouter(Searchbox));

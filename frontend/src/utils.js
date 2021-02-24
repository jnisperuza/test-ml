export const currencyFormat = (num) => {
  if (typeof num === "number" || typeof num === "string") {
    return (
      "$" +
      Number(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }
};

export const numberFormat = (num) => {
  if (typeof num === "number" || typeof num === "string") {
    return Number(num)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
};

export const getItemCondition = (item) => {
  if (item) {
    return item.attributes.find((attr) => attr.id === "ITEM_CONDITION")
      ?.value_name;
  }
};

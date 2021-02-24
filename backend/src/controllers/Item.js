import axios from "axios";

export const products_by_query = async (req, res) => {
  try {
    const { q } = req.query;
    if (q) {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`
      );
      const sorted = (response?.data?.results || []).sort((a, b) =>
        a.order_backend > b.order_backend ? 1 : -1
      );
      res.status(200).json(sorted);
    } else {
      res.status(400).json([]);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const product_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const response = await axios.get(
        `https://api.mercadolibre.com/items/${id}`
      );
      const description = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      const data = response?.data
        ? { ...response.data, description: description?.data?.plain_text }
        : null;
      res.status(200).json(data);
    } else {
      res.status(400).json();
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

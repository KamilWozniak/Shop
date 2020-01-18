import axios from 'axios';

const CATEGORIES_CDN_URL = 'https://api.myjson.com/bins/oqr65';
const PRODUCTS_CDN_URL = 'https://api.myjson.com/bins/144nzm';
const FAVORITES_CDN_URL = 'https://api.myjson.com/bins/r7igq';

export function fetchCategories() {
  return axios.get(CATEGORIES_CDN_URL);
}

export function fetchProducts() {
  return axios.get(PRODUCTS_CDN_URL);
}

export function fetchFavorites() {
  return axios.get(FAVORITES_CDN_URL);
}

export function setFavorites(payload) {
  return axios.put(FAVORITES_CDN_URL, { favorites: [...payload] });
}

export function setProducts(payload) {
  return axios.put(PRODUCTS_CDN_URL, { products: [...payload] });
}

import axios from 'axios';

const CATEGORIES_CDN_URL = 'https://api.myjson.com/bins/oqr65';
const PRODUCTS_CDN_URL = 'https://api.myjson.com/bins/10eus5';

export function fetchCategories() {
  return axios.get(CATEGORIES_CDN_URL);
}

export function fetchProducts() {
  return axios.get(PRODUCTS_CDN_URL);
}

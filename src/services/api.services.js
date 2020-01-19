import axios from 'axios';

const CATEGORIES_CDN_URL = 'https://api.myjson.com/bins/oqr65';
const PRODUCTS_CDN_URL = 'https://api.myjson.com/bins/144nzm';
const FAVORITES_CDN_URL = 'https://api.myjson.com/bins/r7igq';
const CART_CDN_URL = 'https://api.myjson.com/bins/jaave';


export function fetchCategories() {
  return axios.get(CATEGORIES_CDN_URL);
}

export function fetchProducts() {
  return axios.get(PRODUCTS_CDN_URL);
}

export function fetchFavorites() {
  return axios.get(FAVORITES_CDN_URL);
}

export function fetchCartItems() {
  return axios.get(CART_CDN_URL);
}

export function setFavorites(payload) {
  return axios.put(FAVORITES_CDN_URL, { favorites: [...payload] });
}

export function setProducts(payload) {
  return axios.put(PRODUCTS_CDN_URL, { products: [...payload] });
}

export function setCartItems(payload) {
  return axios.put(CART_CDN_URL, { cartItems: [...payload] });
}

const BASE_URL = 'https://itx-frontend-test.onrender.com/'

export const urlKeys = {
  baseUrl: `${BASE_URL}`,
  productsUrl: 'api/product',
  productDetailsUrl: productId => `api/product/${productId}`,
  purchaseProduct: 'api/cart'
}

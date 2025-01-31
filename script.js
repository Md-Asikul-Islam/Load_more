const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");




async function fetchListOfProducts(params) {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method : " GET"
    });

    const products = await response.json()
    console.log(products);
  } catch (error) {
    console.log(` Error fetching the products :${error}`)
  }
}


fetchListOfProducts()